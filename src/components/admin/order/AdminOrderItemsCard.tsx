/* Admin order details card showing order items and order summary */

import type { OrderDetailsItem, OrderItemStatus } from "../../../types/orderDetails";
import OrderItemList from "../order/OrderItemList";
import OrderSummary from "../../cart/OrderSummary";
import { calculateOrderPricing } from "../../../helpers/order/orderCalculation";

type AdminOrderItemsCardProps = {
  items: OrderDetailsItem[];
  onStatusChange: (itemId: number, status: OrderItemStatus) => void;
};

export default function AdminOrderItemsCard({ items, onStatusChange }: AdminOrderItemsCardProps) {
  const { subtotal, gst, serviceFee, total } = calculateOrderPricing(items);

  return (
    <div className="rounded-xl border border-gray-200">
      <div className="flex items-center gap-3 px-6 py-5">
        <h1 className="text-xl font-bold text-gray-900">Order Items</h1>
      </div>

      <OrderItemList items={items} onStatusChange={onStatusChange} />

      <OrderSummary
        subtotal={subtotal}
        gst={gst}
        serviceFee={serviceFee}
        total={total}
        showCheckoutButton={false}
      />
    </div>
  );
}
