/* Admin Dashboard Page showing restaurant statistics and analytics */

import DashboardStatsGrid from "../../../components/admin/dashboard/DashboardStatsGrid";
import OrderStatusCard from "../../../components/admin/dashboard/OrderStatusCard";
import SalesOverviewCard from "../../../components/admin/dashboard/SalesOverviewCard";
import TopSellingItemsCard from "../../../components/admin/dashboard/TopSellingItemCard";

import {
  ALL_TIME_TOP_SELLING_ITEMS,
  DASHBOARD_STATS,
  ORDER_STATUSES,
  PAST_SEVEN_DAYS_TOP_SELLING_ITEMS,
  SALES_DATA,
} from "../../../data/adminDashboard";

import AdminLayout from "../../../layouts/AdminLayout";

export default function AdminDashboardPage() {
  return (
    <AdminLayout
      title="Admin Dashboard"
      description="View restaurant analytics."
    >
      <div className="space-y-6 mt-6">

        {/* Statistics cards*/}
        <DashboardStatsGrid
          stats={DASHBOARD_STATS}
        />

        {/* Sales and order status charts */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <SalesOverviewCard
            data={SALES_DATA}
          />

          <OrderStatusCard
            statuses={ORDER_STATUSES}
          />
        </div>

        {/* All-time and past seven days top-selling items */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <TopSellingItemsCard
            title="All-Time Top Selling"
            items={
              ALL_TIME_TOP_SELLING_ITEMS
            }
          />

          <TopSellingItemsCard
            title="Top Selling — Past 7 Days"
            items={
              PAST_SEVEN_DAYS_TOP_SELLING_ITEMS
            }
          />
        </div>
      </div>
    </AdminLayout>
  );
}