/* Admin Dashboard Page showing restaurant statistics and analytics */

import DashboardStatsGrid from "../../../components/admin/dashboard/DashboardStatsGrid";
import OrderStatusCard from "../../../components/admin/dashboard/OrderStatusCard";
import SalesOverviewCard from "../../../components/admin/dashboard/SalesOverviewCard";
import TopSellingItemsCard from "../../../components/admin/dashboard/TopSellingItemCard";
import { useEffect, useState } from "react";

import { getStats } from "../../../helpers/admin/dashboard/getStats";
import { getOrderStatus } from "../../../helpers/admin/dashboard/getOrderStatus";
import { getSalesData } from "../../../helpers/admin/dashboard/getSalesData";
import { getAllTimeTop, getWeekTop } from "../../../helpers/admin/dashboard/getTopItems";
import AdminLayout from "../../../layouts/AdminLayout";
import type {
  DashboardStat,
  AdminOrderStatus,
  SalesDataPoint,
  TopSellingItem,
} from "../../../types/adminDashboard";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStat[]>([]);
  const [orderStatus, setOrderStatus] = useState<AdminOrderStatus[]>([]);
  const [salesData, setSalesData] = useState<SalesDataPoint[]>([]);
  const [allTimeTop, setAllTimeTop] = useState<TopSellingItem[]>([]);
  const [weekTop, setWeekTop] = useState<TopSellingItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadDashBoard() {
      try {
        const [statsData, statuses, sales, allTime, pastWeek] = await Promise.all([
          getStats(),
          getOrderStatus(),
          getSalesData(),
          getAllTimeTop(),
          getWeekTop(),
        ]);
        setStats(statsData);
        setOrderStatus(statuses);
        setSalesData(sales);
        setAllTimeTop(allTime);
        setWeekTop(pastWeek);
      } finally {
        setLoading(false);
      }
    }
    loadDashBoard();
  }, []);

  if (loading) {
    return (
      <AdminLayout title="Admin Dashboard" description="View restaurant analytics.">
        <div className="p-8">Loading...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Admin Dashboard" description="View restaurant analytics.">
      <div className="space-y-6 mt-6">
        {/* Statistics cards*/}
        <DashboardStatsGrid stats={stats} />

        {/* Sales and order status charts */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <SalesOverviewCard data={salesData} />

          <OrderStatusCard statuses={orderStatus} />
        </div>

        {/* Top Selling (By number of orders) */}
        {/* All-time and past seven days top-selling items */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <TopSellingItemsCard 
            title="All-Time Top Selling (Number of Orders)" 
            items={allTimeTop}
            metric="orders"
          />

          <TopSellingItemsCard 
            title="Top Selling — Past 7 Days (Number of Orders)" 
            items={weekTop} 
            metric="orders"
          /> 
        </div>
        
        {/* Top selling (By revenue) */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* TODO: update allTimeTop and weekTop*/}
          <TopSellingItemsCard 
            title="All-Time Top Selling (Revenue)" 
            items={allTimeTop}
            metric="revenue"
          />

          <TopSellingItemsCard 
            title="Top Selling — Past 7 Days (Revenue)" 
            items={weekTop} 
            metric="revenue"
          />
          
        </div>
      </div>
    </AdminLayout>
  );
}
