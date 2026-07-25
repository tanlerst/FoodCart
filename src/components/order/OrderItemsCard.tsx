/* Order item list under user order detail page */

import type { OrderDetailsItem } from "../../types/order";
import OrderItemRow from "./OrderItemRow";

type OrderItemsCardProps = {
  items: OrderDetailsItem[];
};

export default function OrderItemsCard({ items }: OrderItemsCardProps) {
  return (
    <div className="mb-4 rounded-2xl bg-white p-5 shadow-md">
      <h2 className="mb-2 text-xl font-bold text-gray-900">Order Items</h2>

      <div className="divide-y divide-dashed divide-gray-200">
        {items.map((item) => (
          <OrderItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
