/* grouped food items in cart page */

import type { CartItemData } from "../../types/CartItemData";
import CartItem from "./CartItem";

type CartItemProps = {
  cartItems: CartItemData[];
  incrementQuantity: (foodId: number) => void;
  decrementQuantity: (foodId: number) => void;
  removeItem: (foodId: number) => void;
};

export default function CartItemList({
  cartItems,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}: CartItemProps) {
  // if cart has no items, return string stating cart is empty
  if (cartItems.length === 0) {
    return <p className="text-center text-gray-500">Your cart is empty</p>;
  }

  return (
    <div className="flex items-center justify-between p-4 border-b">
      {cartItems.map((item) => (
        <CartItem
          key={item.food.id}
          cartItem={item}
          incrementQuantity={() => incrementQuantity(item.food.id)}
          decrementQuantity={() => decrementQuantity(item.food.id)}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}
