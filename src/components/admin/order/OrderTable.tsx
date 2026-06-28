/* Order Table component under the admin order page, showing a list of orders */

import { useEffect, useState } from "react";
import OrderBar from "./OrderBar";
import { getOrdersAdmin } from "../../../helpers/admin/getOrdersAdmin";
import { formatOrdersAdmin } from "../../../helpers/admin/formatOrderRows";
import type { adminOrders } from "../../../types/adminOrder";

export default function OrderTable() {
  const [orders, setOrders] = useState<adminOrders[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //const [selectedOrder, setSelectedOrder] = useState<string[]>([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const rows = await getOrdersAdmin();
        const formattedRows = formatOrdersAdmin(rows);
        setOrders(formattedRows);
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

  /*
  function handleSelectOrder(orderNumber: string) {
    // selected order
    if (selectedOrder.includes(orderNumber)) {
      setSelectedOrder(selectedOrder.filter((id) => id !== orderNumber));
    } else {
      setSelectedOrder([...selectedOrder, orderNumber]);
    }
  }
             
  selected={selectedOrder.includes(order.username)}
   onSelect={handleSelectOrder}
            
*/
  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <OrderBar key={order.userId} order={order} />
      ))}
    </div>
  );
}
