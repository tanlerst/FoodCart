import { supabase } from "../../utils/supabase";
import type { ItemData } from "../../types/itemData";

export async function doCheckout(cartItems: ItemData[]) {
  const { data: authData, error: authError } = await supabase.auth.getUser();

  if (authError) {
    throw authError;
  }

  const authUserId = authData.user?.id;

  if (!authUserId) {
    throw new Error("User is not logged in.");
  }

  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("id")
    .eq("authID", authUserId)
    .single();

  if (userError) {
    throw userError;
  }

  const order = cartItems.map((item) => ({
    user: userData.id,
    food: item.food.id,
    quantity: item.quantity,
    status: 1,
  }));

  const { error: insertError } = await supabase.from("orders").insert(order);

  if (insertError) {
    throw insertError;
  }
}
