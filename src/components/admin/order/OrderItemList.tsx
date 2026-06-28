/* Order Item List for admin order details page */

import type { OrderDetailsItem, OrderItemStatus } from "../../../types/orderDetails";
import OrderItem from "./SingleOrderItem";

type OrderItemListProps = {
  items: OrderDetailsItem[];
  onStatusChange: (itemId: number, status: OrderItemStatus) => void;
};

export default function OrderItemList({ items, onStatusChange }: OrderItemListProps) {
  // updated order item

  return (
    <div>
      {items.map((item) => (
        <OrderItem key={item.id} orderItem={item} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
}
