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
  }[];
};

export async function getRecommended(): Promise<FoodItem[]> {
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
    .eq("recommended", true)
    .eq("available", true);

  if (error) {
    throw error;
  }

  return (data ?? []).map((food: FoodRow) => ({
    id: food.id,
    name: food.name,
    description: food.description,
    price: food.price,
    image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
    time: food.time,
    category: {
      name: food.category[0]?.name ?? "",
    },
    isAvailable: true,
  }));
}
