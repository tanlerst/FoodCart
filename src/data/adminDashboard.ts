import { BookOpen, DollarSign, ShoppingBag, UtensilsCrossed } from "lucide-react";

import type {
  DashboardStat,
  AdminOrderStatus,
  SalesDataPoint,
  TopSellingItem,
} from "../types/adminDashboard";

// To test empty data
// export const DASHBOARD_STATS: DashboardStat[] = [];
// export const SALES_DATA: SalesDataPoint[] = [];
// export const ORDER_STATUSES: OrderStatus[] = [];
// export const ALL_TIME_TOP_SELLING_ITEMS: TopSellingItem[] = [];
// export const PAST_SEVEN_DAYS_TOP_SELLING_ITEMS: TopSellingItem[] = [];

// Statistics cards
export const DASHBOARD_STATS: DashboardStat[] = [
  {
    id: "total-orders",
    label: "Total Orders",
    value: "1,248",
    icon: ShoppingBag,
    iconClassName: "text-orange-600",
    iconBackgroundClassName: "bg-orange-100",
  },
  {
    id: "revenue-today",
    label: "Revenue Today",
    value: "$2,842.50",
    icon: DollarSign,
    iconClassName: "text-green-600",
    iconBackgroundClassName: "bg-green-100",
  },
  {
    id: "active-orders",
    label: "Active Orders",
    value: "38",
    icon: UtensilsCrossed,
    iconClassName: "text-blue-600",
    iconBackgroundClassName: "bg-blue-100",
  },
  {
    id: "menu-items",
    label: "Menu Items",
    value: "86",
    icon: BookOpen,
    iconClassName: "text-purple-600",
    iconBackgroundClassName: "bg-purple-100",
  },
];

// Data points for the graph
export const SALES_DATA: SalesDataPoint[] = [
  {
    date: "Aug 12",
    revenue: 650,
  },
  {
    date: "Aug 13",
    revenue: 1100,
  },
  {
    date: "Aug 14",
    revenue: 620,
  },
  {
    date: "Aug 15",
    revenue: 980,
  },
  {
    date: "Aug 16",
    revenue: 1570,
  },
  {
    date: "Aug 17",
    revenue: 1760,
  },
  {
    date: "Aug 18",
    revenue: 1220,
  },
];

// For order status pie chart
export const ORDER_STATUSES: AdminOrderStatus[] = [
  {
    id: "serving",
    label: "Received",
    count: 14,
    percentage: 35,
  },
  {
    id: "preparing",
    label: "Preparing",
    count: 18,
    percentage: 45,
  },
  {
    id: "served",
    label: "Served",
    count: 8,
    percentage: 20,
  },
];

// Top 5 selling items (by total sales)
export const ALL_TIME_TOP_SELLING_ITEMS: TopSellingItem[] = [
  {
    id: 1,
    name: "Chicken Burger",
    image: "",
    orderCount: 342,
  },
  {
    id: 2,
    name: "Cheese Pizza",
    image: "",
    orderCount: 298,
  },
  {
    id: 3,
    name: "Carbonara",
    image: "",
    orderCount: 215,
  },
  {
    id: 4,
    name: "Fried Rice",
    image: "",
    orderCount: 189,
  },
  {
    id: 5,
    name: "Chocolate Shake",
    image: "",
    orderCount: 176,
  },
];

// Top 5 selling item for past 7 days
export const PAST_SEVEN_DAYS_TOP_SELLING_ITEMS: TopSellingItem[] = [
  {
    id: 1,
    name: "Cheese Pizza",
    image: "",
    orderCount: 68,
  },
  {
    id: 2,
    name: "Chicken Burger",
    image: "",
    orderCount: 61,
  },
  {
    id: 3,
    name: "Fried Rice",
    image: "",
    orderCount: 45,
  },
  {
    id: 4,
    name: "Carbonara",
    image: "",
    orderCount: 39,
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    image: "",
    orderCount: 31,
  },
];
