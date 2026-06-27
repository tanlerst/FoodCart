/* Single row of order item in user order detail page */

import type { OrderDetailsItem } from "../../types/orderDetails";
import StatusBadge from "../common/StatusBadge";

type OrderItemRowProps = {
  item: OrderDetailsItem;
};

export default function OrderItemRow({ item }: OrderItemRowProps) {
    const isServed = item.status === "served";

    return (
        <div className="grid grid-cols-[1fr_60px_160px] items-center border-b border-dashed border-gray-200 pb-4 last:border-b-0">
            <div className="flex items-center gap-4">
                {/* Image */}
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />

                <div>
                    {/* Item name */}
                    <h3 className="font-bold text-gray-900">{item.name}</h3>

                    <h2 className="font-medium text-gray-900">${item.price}</h2>

                    {/* Time */}
                    <p className="mt-2 text-sm text-gray-500">🕒 {item.estimatedMinutes} mins</p>
                </div>
            </div>

        {/* Item quantity */}
        <p className="font-medium text-gray-900">x{item.quantity}</p>

            <div>
                <StatusBadge status={item.status}/>

                {/* Served time or est ready time */}
                <p className="mt-2 text-sm text-gray-500">
                    {isServed ? `` : `Est. ready ${item.estimatedReadyAt}`}
                </p>
            </div>
        </div>
  );
}
