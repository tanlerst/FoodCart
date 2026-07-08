import type { CreateOrderInput, OrderDetails } from "../../types/order";
import { calculateOrderPricing } from "./orderCalculation";

export default function createOrderDetails(order: CreateOrderInput): OrderDetails {
  const pricing = calculateOrderPricing(order.items);

  return {
    ...order,
    ...pricing,
  };
}
