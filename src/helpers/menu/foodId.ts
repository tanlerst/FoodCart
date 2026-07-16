import { supabase } from "../../utils/supabase";
import type { FoodItem } from "../../types/food";

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

  const food = data as unknown as FoodRow;

  return {
    id: food.id,
    name: food.name,
    description: food.description,
    price: food.price,
    image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
    time: food.time,
    category: {
      name: food.category.name,
    },
  };
}
