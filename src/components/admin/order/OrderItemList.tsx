/* Order Item List for admin order details page */

import type { ItemData } from "../../../types/itemData";
import OrderItem from "./SingleOrderItem";

type OrderItemListProps = {
  cartItems: ItemData[];
};

export default function OrderItemList({ cartItems }: OrderItemListProps) {
  return (
    <div>
      {cartItems.map((cartItem) => (
        <OrderItem key={cartItem.food.id} cartItem={cartItem} />
      ))}
    </div>
  );
}
