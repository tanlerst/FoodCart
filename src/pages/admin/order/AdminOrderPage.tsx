/* Admin order page for managing and viewing customer orders */

import { useState } from "react";
import StatusFilterBar from "../../../components/admin/order/StatusFilterBar";
import OrderTable from "../../../components/admin/order/OrderTable";
import AdminLayout from "../../../layouts/AdminLayout";

export default function AdminOrdersPage() {
  const [status, setStatus] = useState("all");

  return (
    <AdminLayout title="Admin Order Page">
      <main className="bg-orange-50 px-2 py-8">
        <StatusFilterBar status={status} onChange={setStatus} />

        <OrderTable status={status} />
      </main>
    </AdminLayout>
  );
}
