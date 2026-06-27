/* Order Bar is a single order under the admin order page, compiling to a list of orders */

import type { OrderDetails, OrderStatus } from "../../../types/orderDetails";

type OrderBarProps = {
  order: OrderDetails;
  selected: boolean;
  onSelect: (orderNumber: string) => void;
};

function getStatusColor(status: OrderStatus): string {
  switch (status) {
    case "received":
      return "bg-blue-100 text-blue-700";

    case "preparing":
      return "bg-yellow-200 text-yellow-800";

    case "serving":
      return "bg-orange-100 text-orange-700";

    case "complete":
      return "bg-green-200 text-green-800";

    case "paid":
      return "bg-gray-200 text-gray-700";

    default:
      return "";
  }
}

function getTotalItemQuantity(order: OrderDetails): number {
  return order.items.reduce((total, item) => total + item.quantity, 0);
}

export default function OrderBar({ order, selected, onSelect }: OrderBarProps) {
  const orderItemQuantity = getTotalItemQuantity(order);

  return (
    <div
      className={`grid grid-cols-[60px_160px_100px_200px_94px] justify-between items-center p-4 rounded-lg shadow-md cursor-pointer ${selected ? "bg-blue-100" : "bg-white"}`}
      onClick={() => onSelect(order.orderNumber)}
    >
      {/* Tick box */}
      <div className="mr-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(order.orderNumber)}
          onClick={(event) => event.stopPropagation()}
          className="form-checkbox h-5 w-5 text-blue-600 accent-orange-600 rounded"
        />
      </div>

      {/* Order ID and date */}
      <div className="flex flex-col">
        <span className="font-semibold">#{order.orderNumber}</span>

        <span className="text-sm text-gray-500">{order.placedAt}</span>
      </div>

      {/* Customer Name */}

      <div className="flex flex-col">
        <span className="font-semibold">{order.customerID}</span>
      </div>

      {/* Items and Total Price */}

      <div className="flex flex-col items-end">
        <span className="text-sm">{orderItemQuantity} items</span>

        <span className="font-semibold">${order.total.toFixed(2)}</span>
      </div>

      {/* Status */}

      <div
        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}
      >
        {order.status}
      </div>
    </div>
  );
}
