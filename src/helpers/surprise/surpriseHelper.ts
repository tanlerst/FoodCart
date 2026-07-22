import { supabase } from "../../utils/supabase";
import type { Food } from "../../types/food";
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

export async function getSurpriseFoods(preferences: SurprisePreferences): Promise<Food[] | null> {
  const [foodsResponse, restrictionsResponse, foodRestrictionsResponse] = await Promise.all([
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

  if (foodsResponse.error) throw foodsResponse.error;
  if (restrictionsResponse.error) throw restrictionsResponse.error;
  if (foodRestrictionsResponse.error) throw foodRestrictionsResponse.error;

  const foods = (foodsResponse.data ?? []) as any as FoodRow[];
  const restrictions = (restrictionsResponse.data ?? []) as RestrictionRow[];
  const foodRestrictions = (foodRestrictionsResponse.data ?? []) as FoodRestrictionRow[];

  const restrictionById = new Map<number, string>(
    restrictions.map((row) => [row.id, row.restriction]),
  );

  const blockedRestrictions = new Map<number, Set<string>>();

  for (const row of foodRestrictions) {
    const restrictionName = restrictionById.get(row.restrictionId);
    if (!restrictionName) continue;
    const existing = blockedRestrictions.get(row.foodId) ?? new Set<string>();
    existing.add(restrictionName);
    blockedRestrictions.set(row.foodId, existing);
  }

  const selectedCategories =
    preferences.categories.includes("All categories") || preferences.categories.length === 0
      ? null
      : new Set(preferences.categories);

  const selectedRestrictions = new Set(preferences.dietaryPreferences);
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
    }))
    .filter((food) => {
      const categoryOk = !selectedCategories || selectedCategories.has(food.category.name);

      const budgetOk = food.price <= preferences.budget;

      const blockedRestrictions = blockedRestrictionsByFoodId.get(food.id) ?? new Set<string>();

      const restrictionOk = [...selectedRestrictions].every(
        (restriction) => !blockedRestrictions.has(restriction),
      );

      return categoryOk && budgetOk && restrictionOk;
    });

  if (candidates.length === 0) {
    return null;
  }

  const picked: Food[] = [];

  for (let i = 0; i < preferences.amount; i++) {
    picked.push(randomFrom(candidates));
  }

  return picked;
}
