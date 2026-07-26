import { supabase } from "../../utils/supabase";
import type { CartItem } from "../../types/cart";

const PAID = 4;

export async function doCheckout(cartItems: CartItem[]) {
  function generateOrderNumber(length = 13) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }

  async function getOrderNumber(userId: number) {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("orderNumber, ordertime")
      .eq("user", userId)
      .neq("status", PAID)
      .limit(1);

    if (error) throw error;

    const existing = orders?.[0]?.orderNumber;
    if (existing) {
      return existing as string;
    }

    while (true) {
      const orderNumber = generateOrderNumber();

      const { data, error: checkError } = await supabase
        .from("orders")
        .select("id")
        .eq("orderNumber", orderNumber)
        .limit(1);

      if (checkError) {
        throw checkError;
      }

      if (!data || data.length === 0) {
        return orderNumber;
      }
    }
  }

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

  const orderNumber = await getOrderNumber(userData.id);

  const order = cartItems.map((item) => ({
    user: userData.id,
    food: item.food.id,
    quantity: item.quantity,
    status: 1,
    orderNumber,
  }));

  const { error: insertError } = await supabase.from("orders").insert(order);

  if (insertError) {
    throw insertError;
  }
}
