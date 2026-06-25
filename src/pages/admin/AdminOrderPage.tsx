/* Admin order page for managing and viewing customer orders */

import OrderTable from "../../components/admin/OrderTable";

export default function AdminOrderPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Order Page</h1>
      <OrderTable />
    </div>
  );
}
