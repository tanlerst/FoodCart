import { supabase } from "../../utils/supabase";

export async function readRestrictions(foodId: number): Promise<number[]> {
  const { data, error } = await supabase
    .from("foodrestrictions")
    .select("restrictionId")
    .eq("foodId", foodId);

  if (error) {
    throw error;
  }

  return (data ?? []).map((row) => row.restrictionId);
}
