import type { ItemData } from "../../types/itemData";

const SST_RATE = 0.06;

export function calculateSubtotal(cartItems: ItemData[]) {
  return cartItems.reduce((total, item) => total + item.food.price * item.quantity, 0);
}

export function calculateSST(subtotal: number) {
  return subtotal * SST_RATE;
}

export function calculateTotal(subtotal: number) {
  return subtotal + calculateSST(subtotal);
}
