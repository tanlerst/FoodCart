import { supabase } from "../../utils/supabase";

export type CategoryOption = {
  id: number;
  name: string;
};

export async function getCategories() {
  const { data, error } = await supabase.from("category").select("id,name").order("name");

  if (error) throw error;

  return (data ?? []) as CategoryOption[];
}
