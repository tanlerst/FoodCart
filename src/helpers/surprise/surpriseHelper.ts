import { supabase } from "../../utils/supabase";
import type { FoodItem } from "../../types/food";
import type { SurprisePreferences } from "../../types/surprise";

type FoodRow = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  time: number;
  category: {
    name: string;
  };
};

type RestrictionRow = {
  id: number;
  restriction: string;
};

type FoodRestrictionRow = {
  foodId: number;
  restrictionId: number;
};

function randomFrom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export async function getSurpriseFoods(
  preferences: SurprisePreferences,
): Promise<FoodItem[] | null> {
  const [foodData, restrictionData, foodRestrictionsData] = await Promise.all([
    supabase
      .from("food")
      .select(
        `
          id,
          name,
          description,
          price,
          image,
          time,
          category (
            name
          )
        `,
      )
      .eq("available", true),
    supabase.from("restrictions").select("id, restriction"),

    supabase.from("foodrestrictions").select("foodId, restrictionId"),
  ]);

  if (foodData.error) throw foodData.error;
  if (foodRestrictionsData.error) throw foodRestrictionsData.error;
  if (restrictionData.error) throw restrictionData.error;
  const foods = (foodData.data ?? []) as any as FoodRow[];
  const foodRestrictions = (foodRestrictionsData.data ?? []) as FoodRestrictionRow[];
  const restrictions = (restrictionData.data ?? []) as RestrictionRow[];

  const restrictionNameToId = new Map<string, number>(
    restrictions.map((row) => [row.restriction, row.id]),
  );

  const selectedRestrictionIds = new Set(
    preferences.dietaryPreferences
      .map((name) => restrictionNameToId.get(name))
      .filter((id): id is number => id !== undefined),
  );

  const selectedCategories =
    preferences.categories.includes("All categories") || preferences.categories.length === 0
      ? null
      : new Set(preferences.categories);

  const restrictionsByFood = new Map<number, Set<number>>();
  for (const row of foodRestrictions) {
    const existing = restrictionsByFood.get(row.foodId) ?? new Set<number>();
    existing.add(row.restrictionId);
    restrictionsByFood.set(row.foodId, existing);
  }

  const candidates = foods
    .map((food) => ({
      id: food.id,
      name: food.name,
      description: food.description,
      price: food.price,
      image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
      time: food.time,
      category: {
        name: food.category.name,
      },
      isAvailable: true,
    }))
    .filter((food) => {
      const categoryOk = !selectedCategories || selectedCategories.has(food.category.name);
      const budgetOk = food.price <= preferences.budget;

      const foodPreferences = restrictionsByFood.get(food.id) ?? new Set<number>();
      const dietOk =
        selectedRestrictionIds.size === 0 ||
        [...selectedRestrictionIds].every((id) => foodPreferences.has(id));
      return categoryOk && budgetOk && dietOk;
    });

  if (candidates.length === 0) {
    return null;
  }

  const picked: FoodItem[] = [];

  for (let i = 0; i < preferences.amount; i++) {
    picked.push(randomFrom(candidates));
  }

  return picked;
}
