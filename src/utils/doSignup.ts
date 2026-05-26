import { supabase } from "./supabase";

interface Credentials {
  username: string;
  email: string;
  password: string;
}

export async function doSignup({ username, email, password }: Credentials) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  const userId = data.user?.id;
  if (!userId) {
    throw new Error("No user ID returned.");
  }

  const { error: usernameError } = await supabase.from("users").insert({
    authID: userId,
    username,
  });
  if (usernameError) throw usernameError;
}
