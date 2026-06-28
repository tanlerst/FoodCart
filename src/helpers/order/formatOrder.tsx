import { supabase } from "../../utils/supabase";
import type {
  OrderDetails,
  OrderDetailsItem,
  OrderItemStatus,
  OrderStatus,
} from "../../types/orderDetails";
import type { OrderData } from "../../types/OrderData";
import { calculateOrderPricing } from "./orderCalculation";

type FoodRow = OrderData["foodRows"][number];

function formatDateTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatTime(isoString: string): string {
  const date = new Date(isoString);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function addMinutes(isoString: string, minutes: number): string {
  const date = new Date(isoString);
  date.setMinutes(date.getMinutes() + minutes);
  return date.toISOString();
}

function getItemStatus(statusId: number): OrderItemStatus {
  return statusId === 3 ? "served" : "preparing";
}

function getOrderStatus(statusIds: number[]): OrderStatus {
  if (statusIds.includes(1)) return "preparing";
  if (statusIds.every((item) => item === 3)) return "complete";
  return "serving";
}

export function formatOrder(data: OrderData): OrderDetails {
  const foodMap = new Map<number, FoodRow>();
  data.foodRows.forEach((food) => {
    foodMap.set(food.id, food);
  });

  const items: OrderDetailsItem[] = data.orderRows.map((row) => {
    const food = foodMap.get(row.food);

    if (!food) {
      throw new Error(`Food row not found`);
    }

    const itemStatus = getItemStatus(row.status);
    return {
      id: food.id,
      name: food.name,
      image: supabase.storage.from("FoodCart").getPublicUrl(food.image).data.publicUrl,
      quantity: row.quantity,
      price: food.price,
      estimatedMinutes: food.time,
      status: itemStatus,
      ...(itemStatus === "served"
        ? {}
        : {
            estimatedReadyAt: formatTime(addMinutes(row.ordertime, food.time)),
          }),
    };
  });

  const pricing = calculateOrderPricing(items);

  return {
    customerID: data.authUserId,
    orderNumber: "FC-0001",
    placedAt: formatDateTime(data.orderRows[0].ordertime),
    orderType: "Dine In",
    tableNumber: "1",
    status: getOrderStatus(data.orderRows.map((row) => row.status)),
    items,
    ...pricing,
  };
}
