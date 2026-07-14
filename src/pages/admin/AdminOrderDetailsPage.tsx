/* Admin Order Details Page */

import AdminOrderItemsCard from "../../components/admin/order/AdminOrderItemsCard";
import type { OrderDetailsItem, OrderItemStatus, OrderStatus } from "../../types/orderDetails";
import AdminSideBar from "../../components/admin/AdminSideBar";
import { useEffect, useState } from "react";
import { getOrderDetails } from "../../helpers/admin/getOrderDetails";
// import { useLocation, Navigate } from "react-router";
import { updateItemStatus } from "../../helpers/admin/updateItemStatus";
import AdminOrderSearchBar from "../../components/admin/order/AdminOrderSearchBar";
import AdminOrderStatusTracker from "../../components/admin/order/status_tracker/AdminOrderStatusTracker";
import StartPreparingButton from "../../components/admin/order/StartPreparingButton";
import MarkAllServedButton from "../../components/admin/order/MarkAllAsServedButton";
import MarkAsPaidButton from  "../../components/admin/order/MarkAsPaidButton";
import OrderCompletedBadge from "../../components/admin/order/OrderCompleteBadge"
import MarkOrderCompleteButton from "../../components/admin/order/MarkOrderCompleteButton";

// type orderDetailsLocationState = {
//   orderIds: number[];
//   status: OrderStatus;
// };

const mockOrders: OrderDetailsItem[] = [
  {
    id: 1,
    name: "Chicken Rice",
    image: "",
    quantity: 2,
    price: 8.5,
    estimatedMinutes: 15,
    status: "preparing",
    estimatedReadyAt: "12:30 PM",
  },
  {
    id: 2,
    name: "Laksa",
    image: "",
    quantity: 1,
    price: 10,
    estimatedMinutes: 20,
    status: "preparing",
    estimatedReadyAt: "12:35 PM",
  },
  {
    id: 3,
    name: "Iced Lemon Tea",
    image: "",
    quantity: 2,
    price: 3.5,
    estimatedMinutes: 5,
    status: "served",
    servedAt: "12:10 PM",
  },
];

export default function AdminOrderDetailsPage() {
  // const location = useLocation();
  // const state = location.state as orderDetailsLocationState;
  
  // if (!state || !state.orderIds || state.orderIds.length === 0) {
  //   return <Navigate to="/admin" replace />;
  // }
  // const { orderIds } = state;
  // const [orders, setOrders] = useState<OrderDetailsItem[]>([]);
  
  const [orders, setOrders] = useState<OrderDetailsItem[]>(mockOrders);

  const [orderStatus, setOrderStatus] = useState<OrderStatus>("received");


  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // async function handleStatusChange(itemId: number, newStatus: OrderItemStatus) {
  //   try {
  //     await updateItemStatus(itemId, newStatus);

  //     setOrders((prev) =>
  //       prev.map((item) =>
  //         item.id === itemId
  //           ? {
  //               ...item,
  //               status: newStatus,
  //             }
  //           : item,
  //       ),
  //     );
  //   } catch (error) {
  //     console.error(error);
  //     alert(error instanceof Error ? error.message : "Failed to update item status.");
  //   }
  // }

  /**
   * Handles logic for updating order status for order tracker.
   * If all items' statuses are updated to served, the order status will be updated to served
   * if some items' statuses are updated to served, the order status will be updated to serving
   * @param items 
   * @returns 
   */
  function getOrderStatusFromItems(
    items: OrderDetailsItem[],
  ): OrderStatus {
    const allServed = items.every(
      (item) => item.status === "served",
    );

    if (allServed) {
      return "served"; // if all items are served, the order status will be updated to served
    }

    const someServed = items.some(
      (item) => item.status === "served",
    );

    if (someServed) {
      return "serving"; // if some items are served, the order status will be updated to serving
    }
    return "preparing";
  }

function handleStatusChange(
  itemId: number,
  newStatus: OrderItemStatus,
) {
  // try {
  //     await updateItemStatus(itemId, newStatus);
  setOrders((previousOrders) => {
    const updatedOrders = previousOrders.map((item) =>
      item.id === itemId
        ? {
            ...item,
            status: newStatus,
            servedAt:
              newStatus === "served"
                ? new Date().toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })
                : undefined,
          }
        : item,
    );

    setOrderStatus(
      getOrderStatusFromItems(updatedOrders),
    );

    return updatedOrders;
  });

  // } catch (error) {
  //     console.error(error);
  //     alert(error instanceof Error ? error.message : "Failed to update item status.");
  //   }
}

  /**
   * Handle logic for start preparing button.
   */
  function handleStartPreparing() {
    setOrderStatus("preparing");
    setOrders((previousOrders) =>
      previousOrders.map((item) => ({
        ...item,
        status: "preparing",
      })),
    );
  }

  /**
   * Handle logic for mark all as served button.
   * Set all items' statuses to served.
   */
  function handleMarkAllServed() {
    setOrderStatus("served");
    setOrders((previousOrders) =>
      previousOrders.map((item) => ({
        ...item,
        status: "served",
      })),
    );
  }

  /**
   * Handle logic for mark as paid button.
   * Set all items' statuses to served.
   */
  function handleMarkAsPaid() {
    setOrderStatus("paid");
  }

  function handleMarkOrderComplete() {
    setOrderStatus("complete");
  }

  // useEffect(() => {
  //   async function loadOrders() {
  //     try {
  //       const rows = await getOrderDetails(orderIds);
  //       setOrders(rows);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : "Failed to load orders.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadOrders();
  // }, [orderIds]);

  // if (loading) {
  //   return <div>Loading orders...</div>;
  // }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex min-h-screen bg-orange-50">
      <AdminSideBar />
      
      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <header>
            
            <h1 className="text-2xl font-bold text-gray-900">
              Order Details
            </h1>
          </header>

          {/* Status Tracker */}
          <AdminOrderStatusTracker status={orderStatus}/>

          {/* Buttons */}

          <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:justify-end">
            {orderStatus === "received" && (
              <StartPreparingButton onClick={handleStartPreparing} />
            )}

            {(orderStatus === "preparing" ||
              orderStatus === "serving") && (
              <MarkAllServedButton onClick={handleMarkAllServed} />
            )}

            {orderStatus === "served" && (
              <MarkAsPaidButton onClick={handleMarkAsPaid} />
            )}

            {orderStatus === "paid" && (
              <MarkOrderCompleteButton onClick={handleMarkOrderComplete}/>
            )}

            {orderStatus === "complete" && (
              <OrderCompletedBadge/>
            )}
          </div>

          {mockOrders.length > 0 ? (
            <AdminOrderItemsCard
              items={mockOrders}
              onStatusChange={handleStatusChange}
            />
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
              <p className="font-medium text-gray-800">
                No matching order items found
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Try searching by item ID, name, or status.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );

}