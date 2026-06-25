/* Admin order page for managing and viewing customer orders */

import { useState } from "react";
import StatusFilterBar from "../../components/admin/StatusFilterBar";
import OrderTable from "../../components/admin/OrderTable";

export default function AdminOrdersPage() {
  const [status, setStatus] = useState("all");

  return (
    <div className="min-h-screen bg-orange-50 px-8 py-8">
      <StatusFilterBar
        status={status}
        onChange={setStatus}
      />

        <div className="p-4">            
            <h1 className="text-2xl font-bold mb-4">Admin Order Page</h1>
                <OrderTable />
        </div>
    </div>
    
    
  );
}