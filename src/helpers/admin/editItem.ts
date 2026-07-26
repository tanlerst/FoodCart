// helpers/admin/updateItem.ts
import { supabase } from "../../utils/supabase";

export type UpdateItemDetails = {
  id: number;
  name: string;
  description: string;
  category: number;
  price: number;
  time: number;
  availability: boolean;
  recommended: boolean;
  dietaryPreferences: number[];
  image: File | null;
};

export async function editItem({
  id,
  name,
  description,
  category,
  price,
  time,
  availability,
  recommended,
  dietaryPreferences,
  image,
}: UpdateItemDetails) {
  let imagePath: string | undefined;

  if (image) {
    imagePath = `food/${image.name}`;

    const { error: uploadError } = await supabase.storage.from("FoodCart").upload(imagePath, image);

    if (uploadError) {
      throw uploadError;
    }
  }

  const updateDetails: Record<string, unknown> = {
    name,
    description,
    category,
    price,
    time,
    available: availability,
    recommended,
  };

  if (imagePath) {
    updateDetails.image = imagePath;
  }

  const { error: updateError } = await supabase.from("food").update(updateDetails).eq("id", id);

  if (updateError) {
    throw updateError;
  }

  const { error: deleteError } = await supabase.from("foodrestrictions").delete().eq("foodId", id);

  if (deleteError) {
    throw deleteError;
  }

  if (dietaryPreferences.length > 0) {
    const rows = dietaryPreferences.map((restrictionId) => ({
      foodId: id,
      restrictionId,
    }));

    const { error: insertError } = await supabase.from("foodrestrictions").insert(rows);

    if (insertError) {
      throw insertError;
    }
  }
}
