/* Order Item List for admin order details page */

import type { CartItemData } from "../../types/CartItemData";
import OrderItem from "./SingleOrderItem";

type OrderItemListProps = {
  cartItems: CartItemData[];
};

export default function OrderItemList({ cartItems }: OrderItemListProps) {

  return (
    <div>

      {cartItems.map((cartItem) => (
        <OrderItem
          key={cartItem.food.id}
          cartItem={cartItem}
        />
      ))}
    
    </div>
  );
}