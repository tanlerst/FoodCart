/* Order Item List for admin order details page */

import type { CartItemData } from "../../types/CartItemData";
import OrderItem from "./SingleOrderItem";

type OrderItemListProps = {
  cartItems: CartItemData[];
};

export default function OrderItemList({ cartItems }: OrderItemListProps) {

  return (
    <div>

      <h2 className="mb-4 text-xl font-bold text-gray-900">
        Order Items
      </h2>

      {cartItems.map((cartItem) => (
        <OrderItem
          key={cartItem.food.id}
          cartItem={cartItem}
        />
      ))}
    
    </div>
  );
}