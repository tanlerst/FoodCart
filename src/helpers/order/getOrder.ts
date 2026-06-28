import { supabase } from "../../utils/supabase";
import type { UserRow, OrderRow, FoodRow, OrderData } from "../../types/OrderData";

export async function getOrder(): Promise<OrderData | null> {
  const { data: authData, error: authError } = await supabase.auth.getUser();

  if (authError) {
    throw authError;
  }

  const authUserId = authData.user?.id;
  if (!authUserId) {
    return null;
  }

  const { data: userRow, error: userError } = await supabase
    .from("users")
    .select("id")
    .eq("authID", authUserId)
    .maybeSingle<UserRow>();

  if (userError) {
    throw userError;
  }

  if (!userRow) {
    return null;
  }

  const { data: orderRows, error: orderError } = await supabase
    .from("orders")
    .select("id, food, quantity, status, ordertime")
    .eq("user", userRow.id)
    .neq("status", 4)
    .order("ordertime", { ascending: true });

  if (orderError) {
    throw orderError;
  }

  if (!orderRows || orderRows.length === 0) {
    return null;
  }

  const typedOrderRows = orderRows as OrderRow[];
  const foodIds = [...new Set(typedOrderRows.map((row) => row.food))];
  const { data: foodRows, error: foodError } = await supabase
    .from("food")
    .select("id, name, price, image, time")
    .in("id", foodIds);

  if (foodError) {
    throw foodError;
  }

  return {
    authUserId,
    userRow,
    orderRows: typedOrderRows,
    foodRows: (foodRows ?? []) as FoodRow[],
  };
}
