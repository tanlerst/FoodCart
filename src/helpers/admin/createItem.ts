import { supabase } from "../../utils/supabase";

export type itemDetails = {
  name: string;
  description: string;
  category: number;
  price: number;
  time: number;
  availability: boolean;
  recommended: boolean;
  dietaryPreferences: number[];
  image: File;
};

export async function createItem({
  name,
  description,
  category,
  price,
  time,
  availability,
  recommended,
  dietaryPreferences,
  image,
}: itemDetails) {
  const filePath = `${image.name}`;

  const { error: uploadError } = await supabase.storage.from("FoodCart").upload(filePath, image);

  if (uploadError) throw uploadError;

  const { data: food, error: insertError } = await supabase
    .from("food")
    .insert({
      name,
      description,
      price,
      image: filePath,
      category,
      time,
      recommended,
      available: availability,
    })
    .select("id")
    .single();

  if (insertError) throw insertError;

  if (dietaryPreferences.length > 0) {
    const foodRestrictions = dietaryPreferences.map((id) => ({
      foodId: food.id,
      restrictionId: id,
    }));

    const { error: restrictionError } = await supabase
      .from("foodrestrictions")
      .insert(foodRestrictions);

    if (restrictionError) {
      throw restrictionError;
    }
  }
}
