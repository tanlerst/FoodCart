import type { ItemData } from "../../types/itemData";

const GST_RATE = 0.06;
const SERVICE_FEE_RATE = 0.1;

export function calculateSubtotal(cartItems: ItemData[]) {
  return cartItems.reduce((total, item) => total + item.food.price * item.quantity, 0);
}

export function calculateGST(subtotal: number) {
  return subtotal * GST_RATE;
}

export function calculateServiceFee(subtotal: number) {
  return subtotal * SERVICE_FEE_RATE;
}

export function calculateTotal(subtotal: number) {
  return subtotal + calculateGST(subtotal) + calculateServiceFee(subtotal);
}
