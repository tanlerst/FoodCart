import { supabase } from "../../utils/supabase";

export type RestrictionRow = {
  id: number;
  restriction: string;
};

export async function readRestrictions(): Promise<RestrictionRow[]> {
  const { data, error } = await supabase.from("restrictions").select("id,restriction");

  if (error) {
    throw error;
  }

  return data;
}
