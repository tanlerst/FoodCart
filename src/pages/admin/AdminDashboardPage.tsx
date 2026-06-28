/* Admin Dashboard Page showing top selling food items and total sales */

import AdminSideBar from "../../components/admin/AdminSideBar";

export default function AdminDashboardPage() {

  return (
    <div className="flex min-h-screen bg-gray-50">
        {/* Side bar */}
        <AdminSideBar></AdminSideBar>

        <div className="min-h-screen bg-gray-50 px-5 py-6">
        {/* Page title */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>

                <p className="mt-2 text-gray-500">View restaurant analytics.</p>
            </div>
        </div>
    </div>
    );
}

