import type { TopSellingItem, TopSellingMetric } from "../../../types/adminDashboard";
import { supabase } from "../../../utils/supabase";

type OrderRow = {
  food: number;
  quantity: number;
  ordertime: string;
  status: number;
};

type FoodRow = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const PAID = 4;

async function getTop(metric: TopSellingMetric, days?: number): Promise<TopSellingItem[]> {
  const data = supabase.from("orders").select("food, quantity, ordertime, status");

  const filteredData =
    typeof days === "number"
      ? data.gte("ordertime", new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString())
      : data;

  const [ordersRes, foodsRes] = await Promise.all([
    filteredData,
    supabase.from("food").select("id, name, image, price"),
  ]);

  if (ordersRes.error) throw ordersRes.error;
  if (foodsRes.error) throw foodsRes.error;

  const orders = (ordersRes.data ?? []) as OrderRow[];
  const foods = (foodsRes.data ?? []) as FoodRow[];

  const foodMap = new Map<number, FoodRow>(foods.map((food) => [food.id, food]));
  const counts = new Map<number, { orderCount: number; revenue: number }>();

  for (const row of orders) {
    if (row.status !== PAID) {
      continue;
    }
    const food = foodMap.get(row.food);
    if (!food) {
      continue;
    }
    const existing = counts.get(row.food) ?? {
      orderCount: 0,
      revenue: 0,
    };
    existing.orderCount += row.quantity;
    existing.revenue += row.quantity * food.price;
    counts.set(row.food, existing);
  }

  return [...counts.entries()]
    .map(([foodId, totals]) => {
      const food = foodMap.get(foodId);
      if (!food) return null;

      return {
        id: food.id,
        name: food.name,
        image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
        orderCount: totals.orderCount,
        revenue: Number(totals.revenue.toFixed(2)),
      } as TopSellingItem;
    })
    .filter((item): item is TopSellingItem => item !== null)
    .sort((a, b) => (metric === "orders" ? b.orderCount - a.orderCount : b.revenue - a.revenue))
    .slice(0, 5);
}

export async function getAllTimeTop(metric: TopSellingMetric) {
  return getTop(metric);
}

export async function getWeekTop(metric: TopSellingMetric) {
  return getTop(metric, 7);
}
