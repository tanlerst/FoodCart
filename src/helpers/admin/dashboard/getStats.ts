import { BookOpen, DollarSign, ShoppingBag, UtensilsCrossed } from "lucide-react";
import type { DashboardStat } from "../../../types/adminDashboard";
import { supabase } from "../../../utils/supabase";
import type { OrderRow } from "../../../types/getOrderData";

type FoodRow = {
  id: number;
};

const PAID_STATUS = 4;

export async function getStats(): Promise<DashboardStat[]> {
  const [orderData, foodData] = await Promise.all([
    supabase.from("orders").select("id, orderNumber, food, quantity, status, ordertime"),
    supabase.from("food").select("id"),
  ]);

  if (orderData.error) throw orderData.error;
  if (foodData.error) throw foodData.error;

  const orders = (orderData.data ?? []) as OrderRow[];
  const foods = (foodData.data ?? []) as FoodRow[];
  const totalItems = foods.length;
  const orderMap = new Map<string, OrderRow[]>();
  for (const row of orders) {
    const existing = orderMap.get(row.orderNumber) ?? [];
    existing.push(row);
    orderMap.set(row.orderNumber, existing);
  }

  const totalOrders = orderMap.size;

  const activeOrders = [...orderMap.values()].filter((rows) =>
    rows.some((row) => row.status !== PAID_STATUS),
  ).length;
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const foodMap = new Map<number, number>();
  const { data: foodPrices, error: foodError } = await supabase.from("food").select("id,price");

  if (foodError) throw foodError;

  (foodPrices ?? []).forEach((row: { id: number; price: number }) => {
    foodMap.set(row.id, row.price);
  });

  const revenueToday = orders
    .filter((row) => new Date(row.ordertime) >= startOfToday)
    .reduce((sum, row) => {
      const price = foodMap.get(row.food) ?? 0;
      return sum + price * row.quantity;
    }, 0);

  return [
    {
      id: "total-orders",
      label: "Total Orders",
      value: totalOrders.toLocaleString(),
      icon: ShoppingBag,
      iconClassName: "text-orange-600",
      iconBackgroundClassName: "bg-orange-100",
    },
    {
      id: "revenue-today",
      label: "Revenue Today",
      value: `$${revenueToday.toFixed(2)}`,
      icon: DollarSign,
      iconClassName: "text-green-600",
      iconBackgroundClassName: "bg-green-100",
    },
    {
      id: "active-orders",
      label: "Active Orders",
      value: activeOrders.toLocaleString(),
      icon: UtensilsCrossed,
      iconClassName: "text-blue-600",
      iconBackgroundClassName: "bg-blue-100",
    },
    {
      id: "menu-items",
      label: "Menu Items",
      value: totalItems.toLocaleString(),
      icon: BookOpen,
      iconClassName: "text-purple-600",
      iconBackgroundClassName: "bg-purple-100",
    },
  ];
}
