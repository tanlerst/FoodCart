import type { TopSellingItem } from "../../../types/adminDashboard";
import { supabase } from "../../../utils/supabase";

type OrderRow = {
  food: number;
  quantity: number;
  ordertime: string;
};

type FoodRow = {
  id: number;
  name: string;
  image: string;
};

async function getTop(days?: number): Promise<TopSellingItem[]> {
  const data = supabase.from("orders").select("food, quantity, ordertime");

  const filteredData =
    typeof days === "number"
      ? data.gte("ordertime", new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())
      : data;

  const [ordersRes, foodsRes] = await Promise.all([
    filteredData,
    supabase.from("food").select("id, name, image"),
  ]);

  if (ordersRes.error) throw ordersRes.error;
  if (foodsRes.error) throw foodsRes.error;

  const orders = (ordersRes.data ?? []) as OrderRow[];
  const foods = (foodsRes.data ?? []) as FoodRow[];

  const foodMap = new Map<number, FoodRow>(foods.map((food) => [food.id, food]));

  const counts = new Map<number, number>();

  for (const row of orders) {
    counts.set(row.food, (counts.get(row.food) ?? 0) + row.quantity);
  }

  return [...counts.entries()]
    .map(([foodId, orderCount]) => {
      const food = foodMap.get(foodId);
      if (!food) return null;

      return {
        id: food.id,
        name: food.name,
        image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
        orderCount,
      } as TopSellingItem;
    })
    .filter((item): item is TopSellingItem => item !== null)
    .sort((a, b) => b.orderCount - a.orderCount)
    .slice(0, 5);
}

export async function getAllTimeTop(): Promise<TopSellingItem[]> {
  return getTop();
}

export async function getWeekTop(): Promise<TopSellingItem[]> {
  return getTop(7);
}
