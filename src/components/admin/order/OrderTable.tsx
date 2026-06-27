/* Order Table component under the admin order page, showing a list of orders */

import { useState } from "react";
import OrderBar from "./OrderBar";
import type { OrderDetails } from "../../../types/orderDetails";

const orders: OrderDetails[] = [
  
  {
    orderNumber: "FC12346",
    placedAt: "May 26, 2025 at 12:45 PM",
    orderType: "Dine In",
    tableNumber: "7",
    status: "serving",
    subtotal: 31.8,
    serviceFee: 1.2,
    total: 33.0,
    items: [
      {
        id: 1,
        name: "Cheese Burger",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        quantity: 1,
        price: 3.4,
        estimatedMinutes: 15,
        status: "served",
        servedAt: "12:58 PM",
      },
      {
        id: 2,
        name: "Cheese Pizza",
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
        quantity: 1,
        price: 3.4,
        estimatedMinutes: 18,
        status: "served",
        servedAt: "1:05 PM",
      },
      {
        id: 3,
        name: "Ice Lemon Tea",
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
        quantity: 2,
        price: 3.4,
        estimatedMinutes: 5,
        status: "preparing",
        estimatedReadyAt: "1:50 PM",
      },
    ],
  },
  {
    orderNumber: "FC12347",
    placedAt: "May 26, 2025 at 12:45 PM",
    orderType: "Dine In",
    tableNumber: "7",
    status: "serving",
    subtotal: 31.8,
    serviceFee: 1.2,
    total: 33.0,
    items: [
      {
        id: 1,
        name: "Cheese Burger",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        quantity: 1,
        price: 3.4,
        estimatedMinutes: 15,
        status: "served",
        servedAt: "12:58 PM",
      },
      {
        id: 2,
        name: "Cheese Pizza",
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
        quantity: 1,
        price: 3.4,
        estimatedMinutes: 18,
        status: "served",
        servedAt: "1:05 PM",
      },
      {
        id: 3,
        name: "Ice Lemon Tea",
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
        quantity: 2,
        price: 3.4,
        estimatedMinutes: 5,
        status: "preparing",
        estimatedReadyAt: "1:50 PM",
      },
    ],
  },
];

function getOrderStatusFromItems(order: OrderDetails) {
  
  const allItemsServed = order.items.
                          every(
                            (item) => item.status === "served"
                          );

  const someItemsServed = order.items.some(
                            (item) => item.status === "served"
                          );

  if (allItemsServed) {
    return "complete";
  }

  if (someItemsServed) {
    return "serving";
  }

  return "preparing";
}

export default function OrderTable() {
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);

  function handleSelectOrder(orderNumber: string) {
    // selected order
    if (selectedOrder.includes(orderNumber)) {
      setSelectedOrder(selectedOrder.filter((id) => id !== orderNumber));
    } else {
      setSelectedOrder([...selectedOrder, orderNumber]);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => {
        const updatedOrder: OrderDetails = {
          ...order,
          status: getOrderStatusFromItems(order),
        };

        return (
          <OrderBar
            key={updatedOrder.orderNumber}
            order={updatedOrder}
            selected={selectedOrder.includes(updatedOrder.orderNumber)}
            onSelect={handleSelectOrder}
          />
        );
      })}
    </div>
  );
}