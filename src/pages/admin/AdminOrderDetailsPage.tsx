/* Admin Order Details Page */

import AdminOrderItemsCard from "../../components/admin/order/AdminOrderItemsCard";
import type { OrderDetailsItem, OrderItemStatus, OrderStatus } from "../../types/order";
import AdminSideBar from "../../components/admin/AdminSideBar";
import { useEffect, useState } from "react";
import { getOrderDetails } from "../../helpers/admin/getOrderDetails";
import { useLocation, Navigate } from "react-router";
import { updateItemStatus } from "../../helpers/admin/updateItemStatus";
import AdminOrderStatusTracker from "../../components/admin/order/status_tracker/AdminOrderStatusTracker";
import StartPreparingButton from "../../components/admin/order/StartPreparingButton";
import MarkAllServedButton from "../../components/admin/order/MarkAllAsServedButton";
import MarkAsPaidButton from "../../components/admin/order/MarkAsPaidButton";
import OrderCompletedBadge from "../../components/admin/order/OrderCompleteBadge";
import MarkOrderCompleteButton from "../../components/admin/order/MarkOrderCompleteButton";

type orderDetailsLocationState = {
  orderIds: number[];
  status: OrderStatus;
};

export default function AdminOrderDetailsPage() {
  const location = useLocation();
  const state = location.state as orderDetailsLocationState;

  if (!state || !state.orderIds || state.orderIds.length === 0) {
    return <Navigate to="/admin" replace />;
  }
  const { orderIds } = state;
  const [orders, setOrders] = useState<OrderDetailsItem[]>([]);

  const [orderStatus, setOrderStatus] = useState<OrderStatus>("received");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function handleStatusChange(itemId: number, newStatus: OrderItemStatus) {
    try {
      await updateItemStatus(itemId, newStatus);
      setOrders((prev) => {
        const updatedOrders = prev.map((item) =>
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
        setOrderStatus(getOrderStatusFromItems(updatedOrders));

        return updatedOrders;
      });
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Failed to update item status.");
    }
  }

  async function updateAll(newStatus: OrderItemStatus) {
    try {
      await Promise.all(orders.map((item) => handleStatusChange(item.id, newStatus)));
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Failed to update item status.");
    }
  }

  function getOrderStatusFromItems(items: OrderDetailsItem[]): OrderStatus {
    const allPaid = items.every((item) => item.status === "paid");
    if (allPaid) {
      return "paid";
    }

    const allServed = items.every((item) => item.status === "served");
    if (allServed) {
      return "served"; // if all items are served, the order status will be updated to served
    }

    const someServed = items.some((item) => item.status === "served");
    if (someServed) {
      return "serving"; // if some items are served, the order status will be updated to serving
    }

    return "preparing";
  }

  async function handleStartPreparing() {
    await updateAll("preparing");
  }

  async function handleMarkAllServed() {
    await updateAll("served");
  }

  async function handleMarkAsPaid() {
    await updateAll("paid");
  }

  function handleMarkOrderComplete() {
    setOrderStatus("complete");
  }

  useEffect(() => {
    async function loadOrders() {
      try {
        const rows = await getOrderDetails(orderIds);
        setOrders(rows);
        setOrderStatus(getOrderStatusFromItems(rows));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load orders.");
      } finally {
        setLoading(false);
      }
    }
    loadOrders();
  }, [orderIds]);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="ml-64 min-h-screen bg-orange-50">
      <AdminSideBar />

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <header>
            <h1 className="text-2xl font-bold text-gray-900">Order Details</h1>
          </header>

          {/* Status Tracker */}
          <AdminOrderStatusTracker status={orderStatus} />

          {/* Buttons */}

          <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:justify-end">
            {orderStatus === "received" && <StartPreparingButton onClick={handleStartPreparing} />}

            {(orderStatus === "preparing" || orderStatus === "serving") && (
              <MarkAllServedButton onClick={handleMarkAllServed} />
            )}

            {orderStatus === "served" && <MarkAsPaidButton onClick={handleMarkAsPaid} />}

            {orderStatus === "paid" && (
              <MarkOrderCompleteButton onClick={handleMarkOrderComplete} />
            )}

            {orderStatus === "complete" && <OrderCompletedBadge />}
          </div>

          {orders.length > 0 ? (
            <AdminOrderItemsCard items={orders} onStatusChange={handleStatusChange} />
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
              <p className="font-medium text-gray-800">No matching order items found</p>

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
