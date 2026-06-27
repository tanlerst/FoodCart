/* Order information under user order details page */

import type { OrderStatus } from "../../types/orderDetails";

type OrderInfoCardProps = {
  orderNumber: string;
  placedAt: string;
  orderType: string;
  tableNumber: string;
  status: OrderStatus;
};

export default function OrderInfoCard({
  orderNumber,
  placedAt,
  orderType,
  //   tableNumber, // ignore at this moment
  status,
}: OrderInfoCardProps) {
  return (
    <div className="mb-4 rounded-2xl bg-white p-5 shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 text-3xl">
            🧾
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Order #{orderNumber}</h2>

            <p className="mt-1 text-sm text-gray-500">{placedAt}</p>

            <p className="mt-1 text-gray-700">
              {orderType}
              <span className="mx-2">•</span>
              {/* Table {tableNumber} */}
              Table ?
            </p>
          </div>
        </div>

        {/* Status */}
        <span className="rounded-xl bg-orange-100 px-5 py-2 text-sm font-bold uppercase text-orange-600">
          {status}
        </span>
      </div>
    </div>
  );
}
