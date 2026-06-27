/* Admin Order Details Page Order Item */

import type { OrderDetailsItem } from "../../../types/orderDetails";
import StatusBadge from "../../common/StatusBadge";

type OrderItemRowProps = {
  orderItem: OrderDetailsItem;
};

export default function OrderItemRow({ orderItem }: OrderItemRowProps) {
  const isServed = orderItem.status === "served";

  return (
    <div className="mx-auto mb-5 w-full grid grid-cols-[1fr_60px_160px] max-w-4xl rounded-2xl bg-white p-6 shadow-md">
      {/*  <div className="mx-auto mb-5 w-full max-w-4xl rounded-2xl bg-white p-6 shadow-md"> */}
      {/* flex items-center gap-4 */}
      <div className="flex items-center gap-4">
        {/* Image */}
        <img src={orderItem.image} alt={orderItem.name} className="h-20 w-20 rounded-xl object-cover" />

        <div>
          {/* Item name */}
          <h3 className="font-bold text-gray-900">{orderItem.name}</h3>
          
          {/* Price */}
          <h2 className="font-medium text-gray-900">${orderItem.price}</h2>

          {/* Time */}
          <p className="mt-2 text-sm text-gray-500">🕒 {orderItem.estimatedMinutes} mins</p>
        </div>
      </div>

      {/* Item quantity */}
      <p className="font-medium text-gray-900">x{orderItem.quantity}</p>

      <div>
          <StatusBadge status={orderItem.status}/>

          {/* Served time or est ready time */}
          <p className="mt-2 text-sm text-gray-500">
              {isServed ? `` : `Est. ready ${orderItem.estimatedReadyAt}`}
          </p>
      </div>
    </div>
  );
}
