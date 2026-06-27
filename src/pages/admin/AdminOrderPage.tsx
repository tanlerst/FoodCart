/* Admin order page for managing and viewing customer orders */

import { useState } from "react";
import StatusFilterBar from "../../components/admin/order/StatusFilterBar";
import OrderTable from "../../components/admin/order/OrderTable";
import AdminSideBar from "../../components/admin/AdminSideBar"

export default function AdminOrdersPage() {
  const [status, setStatus] = useState("all");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSideBar/>
    
      <main className="flex-1 bg-orange-50 px-8 py-8">
        <StatusFilterBar 
          status={status} 
          onChange={setStatus} 
        />

        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">
            Admin Order Page
          </h1>
          <OrderTable />
        </div>
      </main>
    </div>
  );
}
