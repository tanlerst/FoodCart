/* Order Item List for admin order details page */

import { useState } from "react";
import type { OrderDetailsItem, OrderItemStatus } from "../../../types/orderDetails";
import OrderItem from "./SingleOrderItem";

type OrderItemListProps = {
  items: OrderDetailsItem[];
};

export default function OrderItemList({ items }: OrderItemListProps) {
  // updated order item
  const [orderItems, setOrderItems] = useState<OrderDetailsItem[]>(items);

  // handle order status change performed by admin
  function handleStatusChange(itemId: number, newStatus: OrderItemStatus) {
    setOrderItems((oldItems) => oldItems.map((item) => updateItemStatus(item, itemId, newStatus)));
  }

  function updateItemStatus(item: OrderDetailsItem, itemId: number, newStatus: OrderItemStatus) {
    if (item.id != itemId) {
      return item;
    }

    return {
      ...item,
      status: newStatus,
    };
  }

  return (
    <div>
      {orderItems.map((item) => (
        <OrderItem key={item.id} orderItem={item} onStatusChange={handleStatusChange} />
      ))}
    </div>
  );
}
