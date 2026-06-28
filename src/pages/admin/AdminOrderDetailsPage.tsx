/* Admin Order Details Page */

import AdminOrderItemsCard from "../../components/admin/order/AdminOrderItemsCard";
import type { OrderDetailsItem } from "../../types/orderDetails";
import AdminSideBar from "../../components/admin/AdminSideBar";
import { useEffect, useState } from "react";
import { getOrderDetails } from "../../helpers/admin/getOrderDetails";
import { useLocation, Navigate } from "react-router";
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
  }, []);

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
        <AdminOrderItemsCard items={orders} />
      </div>
    </div>
  );
}
