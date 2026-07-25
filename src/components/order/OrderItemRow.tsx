/* Single row of order item in user order detail page */

import type { OrderDetailsItem } from "../../types/order";
import StatusBadge from "../common/StatusBadge";

type OrderItemRowProps = {
  item: OrderDetailsItem;
};

export default function OrderItemRow({ item }: OrderItemRowProps) {
  const isServed = item.status === "served";

  return (
    <div className="py-2">
      <div className="flex items-center gap-2">
        {/* Image */}
        <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />

        <div>
          {/* Item name & item quantity */}
          <h3 className="font-bold text-gray-900">{item.name} • x{item.quantity}</h3>

          <h2 className="font-medium text-gray-900">${item.price}</h2>

          {/* Time */}
          <p className="mt-1 text-sm text-gray-500">🕒 {item.estimatedMinutes} mins</p>
        </div>

        <div className="shrink-0">
          <StatusBadge status={item.status} />

          {/* Served time or est ready time */}
          <p className="mt-2 text-sm text-gray-500">
            {isServed ? `` : `Est. ready ${item.estimatedReadyAt}`}
          </p>
        </div>
      </div>

      
    </div>
  );
}
