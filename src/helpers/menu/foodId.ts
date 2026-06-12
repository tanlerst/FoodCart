import { supabase } from "../../utils/supabase";
import type { Food } from "../../types/Food";
import type { FoodRow } from "../../types/FoodRow";

export async function fetchFood(id: number): Promise<Food | null> {
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
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  const food = data as FoodRow;

  return {
    id: food.id,
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
  };
}
