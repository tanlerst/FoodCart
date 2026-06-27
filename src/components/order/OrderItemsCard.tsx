/* Order item list under user order detail page */

import type { OrderDetailItem } from "../../types/orderDetails";
import OrderItemRow from "./OrderItemRow";

type OrderItemsCardProps = {
  items: OrderDetailItem[];
};

export default function OrderItemsCard({ items }: OrderItemsCardProps) {
  return (
    <div className="mb-4 rounded-2xl bg-white p-5 shadow-md">
      <h2 className="mb-5 text-xl font-bold text-gray-900">Order Items</h2>

      <div className="mb-3 grid grid-cols-[1fr_60px_160px] text-sm text-gray-600">
        <p>Item</p>

        <p>Qty</p>
        <p>Status</p>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <OrderItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
