import { supabase } from "../../utils/supabase";
import type { FoodItem } from "../../types/food";

type FoodRow = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  time: number;
  recommended: boolean;
  available: boolean;
  category: {
    name: string;
  };
};

export async function getItems(): Promise<FoodItem[]> {
  const { data, error } = await supabase
    .from("food")
    .select(`
      id,
      name,
      description,
      price,
      image,
      time,
      recommended,
      available,
      category (
        name
      )
    `)
    .order("category");

  if (error) {
    throw new Error(error.message);
  }
  const foods = (data ?? []) as unknown as FoodRow[];

  return foods.map((food) => ({
    id: food.id,
    name: food.name,
    description: food.description,
    price: food.price,
    image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
    time: food.time,
    isRecommended: food.recommended,
    isAvailable: food.available,
    category: {
      name: food.category.name,
    },
  }));
}
