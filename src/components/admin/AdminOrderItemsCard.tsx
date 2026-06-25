/* Admin order details card showing order items and order summary */

import type { CartItemData } from "../../types/CartItemData";
import OrderItemList from "./OrderItemList";
import OrderSummary from "../cart/OrderSummary";

import { calculateSubtotal, calculateSST, calculateTotal } from "../cart/cartCalculation";

type AdminOrderItemsCardProps = {
  cartItems: CartItemData[];
};

export default function AdminOrderItemsCard({
  cartItems,
}: AdminOrderItemsCardProps) {
  const subtotal = calculateSubtotal(cartItems);
  const sst = calculateSST(subtotal);
  const total = calculateTotal(subtotal);

  return (
    <div className="rounded-xl border border-gray-200">
      <div className="flex items-center gap-3 px-6 py-5">
        <h1 className="text-xl font-bold text-gray-900">
          Order Items
        </h1>
      </div>

      <OrderItemList 
        cartItems={cartItems} 
        />

      <OrderSummary
        subtotal={subtotal}
        sst={sst}
        total={total}
        showCheckoutButton={false}
      />

    </div>
  );
}