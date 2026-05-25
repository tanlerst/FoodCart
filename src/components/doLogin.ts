import { supabase } from "../utils/supabase";

interface Credentials {
  email: string;
  password: string;
}

export async function doLogin({ email, password }: Credentials) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
