/* Order Table component under the admin order page, showing a list of orders */

import { useState } from "react";
import OrderBar from "./OrderBar";
// import Pagination from "./Pagination";

const orders = [
  {
    orderId: "000001",
    customerName: "James",
    items: 3,
    totalPrice: 25.5,
    status: "preparing",
    date: "2026-06-01",
    time: "12:30 PM",
  },
  {
    orderId: "000002",
    customerName: "Ben",
    items: 2,
    totalPrice: 15.0,
    status: "completed",
    date: "2026-06-02",
    time: "1:15 PM",
  },
  {
    orderId: "000003",
    customerName: "Alice",
    items: 5,
    totalPrice: 40.0,
    status: "cancelled",
    date: "2026-06-03",
    time: "2:45 PM",
  },
  {
    orderId: "000004",
    customerName: "David",
    items: 1,
    totalPrice: 10.0,
    status: "preparing",
    date: "2026-06-04",
    time: "3:30 PM",
  },
];

export default function OrderTable() {
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);

  function handleSelectOrder(orderId: string) {
    if (selectedOrder.includes(orderId)) {
      setSelectedOrder(selectedOrder.filter((id) => id !== orderId));
    } else {
      setSelectedOrder([...selectedOrder, orderId]);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <OrderBar
          key={order.orderId}
          orderId={order.orderId}
          customerName={order.customerName}
          items={order.items}
          totalPrice={order.totalPrice}
          status={order.status as any}
          date={order.date}
          time={order.time}
          selected={selectedOrder.includes(order.orderId)}
          onSelect={handleSelectOrder}
        />
      ))}
    </div>
  );
}
