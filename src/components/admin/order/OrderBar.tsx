/* Order Bar is a single order under the admin order page, compiling to a list of orders */

import type { adminOrders } from "../../../types/adminOrder";
import { useNavigate } from "react-router";

type OrderBarProps = {
  order: adminOrders;
};

function formatDateTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getOrderStatus(order: number): string {
  if (order === 3) {
    return "complete";
  }

  if (order === 2) {
    return "serving";
  }

  return "preparing";
}

function getStatusColor(status: string): string {
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

export default function OrderBar({ order }: OrderBarProps) {
  const navigate = useNavigate();
  function openDetails() {
    navigate("/itemdetails", {
      state: {
        orderIds: order.items,
      },
    });
  }

  return (
    <div
      className={`grid grid-cols-[60px_160px_100px_200px_94px] justify-between items-center p-4 rounded-lg shadow-md cursor-pointer bg-white`}
      onClick={openDetails}
    >
      {/* Order ID and date */}
      <div className="flex flex-col">
        <span className="font-semibold">User {order.username}</span>

        <span className="text-sm text-gray-500">{formatDateTime(order.orderTime)}</span>
      </div>

      {/* Customer Name */}
      {/*
      <div className="flex flex-col">
        <span className="font-semibold">{order.username}</span>
      </div>
      */}
      {/* Items and Total Price */}

      <div className="flex flex-col items-end">
        <span className="text-sm">{order.itemQty} items</span>

        <span className="font-semibold">${order.price.toFixed(2)}</span>
      </div>

      {/* Status */}

      <div
        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(getOrderStatus(order.status))}`}
      >
        {getOrderStatus(order.status)}
      </div>
    </div>
  );
}
