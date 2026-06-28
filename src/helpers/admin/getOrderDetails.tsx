// helpers/admin/getAdminOrderDetailItems.ts
import { supabase } from "../../utils/supabase";
import type { OrderDetailsItem, OrderItemStatus } from "../../types/orderDetails";

type OrderRow = {
  id: number;
  food: number;
  quantity: number;
  status: number;
  ordertime: string;
};

type FoodRow = {
  id: number;
  name: string;
  price: number;
  image: string;
  time: number;
};

function formatTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function addMinutes(timestamp: string, minutes: number): string {
  const date = new Date(timestamp);
  date.setMinutes(date.getMinutes() + minutes);
  return date.toISOString();
}

function getItemStatus(status: number): OrderItemStatus {
  return status === 3 ? "served" : "preparing";
}

export async function getOrderDetails(orderIds: number[]): Promise<OrderDetailsItem[]> {
  const uniqueOrderIds = [...new Set(orderIds)];

  if (uniqueOrderIds.length === 0) {
    return [];
  }

  const { data: orderRows, error: orderError } = await supabase
    .from("orders")
    .select("id, food, quantity, status, ordertime")
    .in("id", uniqueOrderIds)
    .order("ordertime", { ascending: true });

  if (orderError) {
    throw orderError;
  }

  const rows = (orderRows ?? []) as OrderRow[];

  if (rows.length === 0) {
    return [];
  }

  const foodIds = [...new Set(rows.map((row) => row.food))];

  const { data: foodRows, error: foodError } = await supabase
    .from("food")
    .select("id, name, price, image, time")
    .in("id", foodIds);

  if (foodError) {
    throw foodError;
  }

  const foodMap = new Map<number, FoodRow>();
  (foodRows ?? []).forEach((food) => {
    foodMap.set(food.id, food as FoodRow);
  });

  return rows.map((row) => {
    const food = foodMap.get(row.food);

    if (!food) {
      throw new Error(`Food not found for food id ${row.food}`);
    }

    const itemStatus = getItemStatus(row.status);
    const estimatedTime = formatTime(addMinutes(row.ordertime, food.time));

    return {
      id: food.id,
      name: food.name,
      image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
      quantity: row.quantity,
      price: food.price,
      estimatedMinutes: food.time,
      status: itemStatus,
      ...(itemStatus === "served"
        ? { servedAt: estimatedTime }
        : { estimatedReadyAt: estimatedTime }),
    };
  });
}
