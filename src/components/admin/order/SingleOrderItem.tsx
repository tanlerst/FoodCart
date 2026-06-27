/* Admin Order Details Page Order Item */

import type { OrderDetailsItem } from "../../../types/orderDetails";

type OrderItemProps = {
  orderItem: OrderDetailsItem;
};

export default function OrderItem({ orderItem}: OrderItemProps) {
  return (
    <div className="mx-auto mb-5 w-full max-w-4xl rounded-2xl bg-white p-6 shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={orderItem.image}
          alt={orderItem.name}
          className="h-24 w-24 rounded-xl object-cover"
        />

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              {/* Food name */}
              <h3 className="text-xl font-bold text-gray-900">
                {orderItem.name}
              </h3>

              {/* Price */}
              <p className="mt-1 text-lg text-gray-600">
                ${orderItem.price.toFixed(2)}
              </p>

              {/* Quantity */}
              <p className="mt-1 text-sm text-gray-500">
                Quantity: {orderItem.quantity}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center"></div>
        </div>
      </div>
    </div>
  );
}
