/* Order Item List for admin order details page */

import type { ItemData } from "../../../types/itemData";
import OrderItem from "./SingleOrderItem";

type OrderItemListProps = {
  items: ItemData[];
};

export default function OrderItemList({ items }: OrderItemListProps) {
  return (
    <div>
      {items.map((item) => (
        <OrderItem key={item.food.id} cartItem={item} />
      ))}
    </div>
  );
}
