import { supabase } from "../../utils/supabase";
import type { FoodItem } from "../../types/food";
// import type { FoodItem } from "../../types/foodRow";

export async function fetchFood(id: number): Promise<FoodItem | null> {
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

  const food = data as FoodItem;

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
