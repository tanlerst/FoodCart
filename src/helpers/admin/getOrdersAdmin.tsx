import { supabase } from "../../utils/supabase";
import type { adminOrderItems } from "../../types/adminOrder";

type OrderRow = {
  id: number;
  user: number;
  food: number;
  quantity: number;
  status: number;
  ordertime: string;
};

type UserRow = {
  id: number;
  username: string;
};

type FoodRow = {
  id: number;
  price: number;
};

export async function getOrdersAdmin(): Promise<adminOrderItems[]> {
  const { data: orderRows, error: orderError } = await supabase
    .from("orders")
    .select("id, user, food, quantity, status, ordertime")
    .neq("status", 4)
    .order("ordertime", { ascending: true });

  if (orderError) {
    throw orderError;
  }

  const orders = (orderRows ?? []) as OrderRow[];

  if (orders.length === 0) {
    return [];
  }

  const userIds = [...new Set(orders.map((order) => order.user))];
  const foodIds = [...new Set(orders.map((order) => order.food))];

  if (userIds.length === 0 || foodIds.length === 0) {
    return [];
  }

  const [{ data: userData, error: userError }, { data: foodData, error: foodError }] =
    await Promise.all([
      supabase.from("users").select("id, username").in("id", userIds),
      supabase.from("food").select("id, price").in("id", foodIds),
    ]);

  if (userError) {
    throw userError;
  }

  if (foodError) {
    throw foodError;
  }

  const userMap = new Map<number, UserRow>();
  (userData ?? []).forEach((user) => {
    userMap.set(user.id, user as UserRow);
  });

  const foodMap = new Map<number, FoodRow>();
  (foodData ?? []).forEach((food) => {
    foodMap.set(food.id, food as FoodRow);
  });

  return orders.map((order) => {
    const user = userMap.get(order.user);
    const food = foodMap.get(order.food);

    if (!user) {
      throw new Error(`User ${order.user} not found.`);
    }

    if (!food) {
      throw new Error(`Food ${order.food} not found.`);
    }

    return {
      id: order.id,
      userId: user.id,
      username: user.username,
      orderTime: order.ordertime,
      itemQty: order.quantity,
      price: food.price,
      status: order.status,
    };
  });
}
