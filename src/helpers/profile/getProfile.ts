import { supabase } from "../../utils/supabase";
import type { UserProfile } from "../../types/profile";

export async function getProfile(): Promise<UserProfile> {
  const { data: authData, error: authError } = await supabase.auth.getUser();
  if (authError) throw authError;
  const authUser = authData.user;
  if (!authUser) {
    throw new Error("User not logged in.");
  }
  const { data: profileRow, error: profileError } = await supabase
    .from("users")
    .select("username")
    .eq("authID", authUser.id)
    .single();
  if (profileError) throw profileError;

  return {
    name: profileRow.username,
    email: authUser.email ?? "",
  };
}
