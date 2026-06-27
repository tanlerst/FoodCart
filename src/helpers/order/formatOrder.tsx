import { supabase } from "../../utils/supabase";
import type {
  OrderDetails,
  OrderDetailItem,
  OrderItemStatus,
  OrderStatus,
} from "../../types/orderDetails";
import type { orderData } from "./getOrder";

type FoodRow = orderData["foodRows"][number];

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

export function formatOrder(data: orderData): OrderDetails {
  const foodMap = new Map<number, FoodRow>();
  data.foodRows.forEach((food) => {
    foodMap.set(food.id, food);
  });

  const items: OrderDetailItem[] = data.orderRows.map((row) => {
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

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.09;
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  return {
    customerID: data.authUserId,
    orderNumber: "FC-0001",
    placedAt: formatDateTime(data.orderRows[0].ordertime),
    orderType: "Dine In",
    tableNumber: "1",
    status: getOrderStatus(data.orderRows.map((row) => row.status)),
    items,
    subtotal,
    gst,
    serviceFee,
    total,
  };
}
