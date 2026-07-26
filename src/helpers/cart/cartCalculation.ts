import type { CartItem } from "../../types/cart";

const GST_RATE = 0.06;
const SERVICE_FEE_RATE = 0.1;

export function calculateSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.food.price * item.quantity, 0);
}

export function calculateGST(subtotal: number) {
  return subtotal * GST_RATE;
}

export function calculateServiceFee(subtotal: number) {
  return subtotal * SERVICE_FEE_RATE;
}

export function calculateCartTotal(items: CartItem[]) {
  const subtotal = calculateSubtotal(items);
  const gst = calculateGST(subtotal);
  const serviceFee = calculateServiceFee(subtotal);

  return subtotal + gst + serviceFee;
}

export function calculateCartPricing(items: CartItem[]) {
  const subtotal = calculateSubtotal(items);
  const gst = calculateGST(subtotal);
  const serviceFee = calculateServiceFee(subtotal);
  const total = subtotal + gst + serviceFee;

  return {
    subtotal,
    gst,
    serviceFee,
    total,
  };
}
