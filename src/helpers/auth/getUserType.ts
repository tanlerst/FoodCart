import { supabase } from "../../utils/supabase";

export async function getUserType(authUserId: string): Promise<number | null> {
  const { data, error } = await supabase
    .from("users")
    .select("usertype")
    .eq("authID", authUserId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data?.usertype ?? null;
}
