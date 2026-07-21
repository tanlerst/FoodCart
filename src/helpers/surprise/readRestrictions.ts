import { supabase } from "../../utils/supabase";

type RestrictionRow = {
  restriction: string;
};

export async function readRestrictions(): Promise<string[]> {
  const { data, error } = await supabase.from("restrictions").select("restriction");

  if (error) {
    throw error;
  }

  return (data as RestrictionRow[]).map((restriction) => restriction.restriction);
}
