/* Admin Order Details Page */

import AdminOrderItemsCard from "../../components/admin/order/AdminOrderItemsCard";
import type { OrderDetailsItem, OrderItemStatus } from "../../types/orderDetails";
import AdminSideBar from "../../components/admin/AdminSideBar";
import { useEffect, useState } from "react";
import { getOrderDetails } from "../../helpers/admin/getOrderDetails";
import { useLocation, Navigate } from "react-router";
import { updateItemStatus } from "../../helpers/admin/updateItemStatus";

type orderDetails = {
  orderIds: number[];
};

export default function AdminOrderDetailPage() {
  const location = useLocation();
  const state = location.state as orderDetails;
  if (!state || !state.orderIds || state.orderIds.length === 0) {
    return <Navigate to="/admin" replace />;
  }
  const { orderIds } = state;
  const [orders, setOrders] = useState<OrderDetailsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function handleStatusChange(itemId: number, newStatus: OrderItemStatus) {
    try {
      await updateItemStatus(itemId, newStatus);

      setOrders((prev) =>
        prev.map((item) =>
          item.id === itemId
            ? {
                ...item,
                status: newStatus,
              }
            : item,
        ),
      );
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Failed to update item status.");
    }
  }

  useEffect(() => {
    async function loadOrders() {
      try {
        const rows = await getOrderDetails(orderIds);
        setOrders(rows);
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
    <div className="flex min-h-screen bg-gray-50">
      {/* Side bar */}
      <AdminSideBar />

      <div className="flex-1 bg-orange-50 px-8 py-8">
        <AdminOrderItemsCard items={orders} onStatusChange={handleStatusChange} />
      </div>
    </div>
  );
}
