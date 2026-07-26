import type { SalesDataPoint } from "../../../types/adminDashboard";
import { supabase } from "../../../utils/supabase";

type OrderRow = {
  orderNumber: string;
  food: number;
  quantity: number;
  status: number;
  ordertime: string;
};

type FoodRow = {
  id: number;
  price: number;
};

const PAID = 4;

export async function getSalesData(): Promise<SalesDataPoint[]> {
  const [orderData, foodData] = await Promise.all([
    supabase.from("orders").select("orderNumber, food, quantity, status, ordertime"),
    supabase.from("food").select("id,price"),
  ]);

  if (orderData.error) throw orderData.error;
  if (foodData.error) throw foodData.error;

  const orders = (orderData.data ?? []) as OrderRow[];
  const foods = (foodData.data ?? []) as FoodRow[];
  const priceMap = new Map<number, number>(foods.map((food) => [food.id, food.price]));

  const orderMap = new Map<string, OrderRow[]>();

  for (const row of orders) {
    const existing = orderMap.get(row.orderNumber) ?? [];
    existing.push(row);
    orderMap.set(row.orderNumber, existing);
  }

  const revenueByDate = new Map<string, { sortKey: string; date: string; revenue: number }>();

  for (const rows of orderMap.values()) {
    const allPaid = rows.every((row) => row.status === PAID);

    if (!allPaid) {
      continue;
    }

    const revenue = rows.reduce((sum, row) => {
      const price = priceMap.get(row.food) ?? 0;
      return sum + price * row.quantity;
    }, 0);

    const orderDate = new Date(rows[0].ordertime);
    const sortKey = orderDate.toISOString().slice(0, 10);
    const dateLabel = orderDate.toLocaleDateString([], {
      month: "short",
      day: "numeric",
    });

    const existing = revenueByDate.get(sortKey);

    if (existing) {
      existing.revenue += revenue;
    } else {
      revenueByDate.set(sortKey, {
        sortKey,
        date: dateLabel,
        revenue,
      });
    }
  }

  return [...revenueByDate.values()]
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
    .map(({ date, revenue }) => ({
      date,
      revenue,
    }));
}
