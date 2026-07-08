import { supabase } from "../../utils/supabase";

type itemDetails = {
  name: string;
  description: string;
  category: number;
  price: number;
  image: File;
  time: number;
};

export async function createItem({ name, description, category, price, image, time }: itemDetails) {
  const filePath = `${image.name}`;

  const { error: uploadError } = await supabase.storage.from("FoodCart").upload(filePath, image);

  if (uploadError) throw uploadError;

  const { error: insertError } = await supabase.from("food").insert({
    name,
    description,
    price,
    image: filePath,
    category,
    time,
  });

  if (insertError) throw insertError;
}
