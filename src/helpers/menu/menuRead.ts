import { supabase } from "../../utils/supabase";
import type { FoodItem } from "../../types/food";

type CategoryRow = {
  name: string;
};

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

export async function fetchMenu(): Promise<FoodItem[]> {
  const { data, error } = await supabase
    .from("food")
    .select(`
      id,
      name,
      description,
      price,
      image,
      time,
      category (
        name
      )
    `)
    .eq("available", true)
    .order("category");
  if (error) {
    throw error;
  }
  const foods = (data ?? []) as unknown as FoodRow[];
  return foods.map((food) => ({
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
  }));
}

export async function fetchCategories(): Promise<string[]> {
  const { data, error } = await supabase.from("category").select("name");

  if (error) throw error;

  return ["All", ...(data as CategoryRow[]).map((category) => category.name)];
}
