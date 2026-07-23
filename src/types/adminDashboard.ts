import type { LucideIcon } from "lucide-react";

export type DashboardStat = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  iconClassName: string;
  iconBackgroundClassName: string;
};

// for sales graph
export type SalesDataPoint = {
  date: string;
  revenue: number;
};

// pie chart
export type OrderStatus = {
  id: OrderStatusId;
  label: string;
  count: number;
  percentage: number;
};

export type OrderStatusId =
  | "received"
  | "preparing"
  | "served";

export type TopSellingItem = {
  id: number;
  name: string;
  image: string;
  orderCount: number;
};
