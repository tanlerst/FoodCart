import { supabase } from "../../utils/supabase";
import type { Food } from "../../types/Food";

type FoodRow = {
  name: string;
  description: string;
  price: number;
  image: string;
  time: number;
  category: { name: string }[] | { name: string } | null;
};

type CategoryRow = {
  name: string;
};

export async function fetchMenu(): Promise<Food[]> {
  const { data, error } = await supabase.from("food").select(`
      name,
      description,
      price,
      image,
      time,
      category (
        name
      )
    `);

  if (error) throw error;

  return ((data ?? []) as FoodRow[]).map((food) => ({
    name: food.name,
    description: food.description,
    price: food.price,
    image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
    time: food.time,
    category: {
      name: Array.isArray(food.category)
        ? (food.category[0]?.name ?? "Uncategorized")
        : (food.category?.name ?? "Uncategorized"),
    },
  }));
}

export async function fetchCategories(): Promise<string[]> {
  const { data, error } = await supabase.from("category").select("name");

  if (error) throw error;

  return ["All", ...(data as CategoryRow[]).map((category) => category.name)];
}
