import { supabase } from "../../utils/supabase";
import type { OrderItemStatus } from "../../types/orderDetails";

function statusToId(status: OrderItemStatus): number {
  if (status === "served") {
    return 3;
  }
  if (status === "preparing") {
    return 1;
  }
  return 4;
}

export async function updateItemStatus(orderId: number, status: OrderItemStatus) {
  const { error } = await supabase
    .from("orders")
    .update({
      status: statusToId(status),
    })
    .eq("id", orderId);

  if (error) {
    throw error;
  }
}
