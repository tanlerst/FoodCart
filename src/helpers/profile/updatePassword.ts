import { supabase } from "../../utils/supabase";

export async function updatePassword(currentPassword: string, newPassword: string) {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
    current_password: currentPassword,
  });

  if (error) throw error;
}
