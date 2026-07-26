import { supabase } from "../../utils/supabase";
import type { UserProfile } from "../../types/profile";

export async function updateProfile({ name, email }: UserProfile) {
  const { data: authData, error: authError } = await supabase.auth.getUser();

  if (authError) throw authError;

  const authUser = authData.user;
  if (!authUser) {
    throw new Error("User not logged in.");
  }

  const { error: profileError } = await supabase
    .from("users")
    .update({ username: name })
    .eq("authID", authUser.id);

  if (profileError) throw profileError;

  if (email !== authUser.email) {
    const { error: emailError } = await supabase.auth.updateUser({ email });
    if (emailError) throw emailError;
  }
}
