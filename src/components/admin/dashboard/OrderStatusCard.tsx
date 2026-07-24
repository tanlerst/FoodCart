import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { AdminOrderStatus, OrderStatusId } from "../../../types/adminDashboard";

type OrderStatusCardProps = {
  statuses: AdminOrderStatus[];
};

const ORDER_STATUS_COLOURS: Record<OrderStatusId, string> = {
  serving: "#3b82f6",
  preparing: "#f97316",
  served: "#16a34a",
};

export default function OrderStatusCard({ statuses }: OrderStatusCardProps) {
  // Number of orders for each status
  const totalOrders = statuses.reduce((total, status) => total + status.count, 0);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-bold text-gray-900">Order Status Breakdown</h2>

      {statuses.length > 0 ? (
        <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row">
          <div className="relative h-56 w-56 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statuses}
                  dataKey="count"
                  nameKey="label"
                  cx="50%"
                  cy="50%"
                  innerRadius={62}
                  outerRadius={95}
                  paddingAngle={1}
                >
                  {statuses.map((status) => (
                    <Cell key={status.id} fill={ORDER_STATUS_COLOURS[status.id]} />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value, _name, entry) => {
                    const status = entry.payload as AdminOrderStatus;
                    return [`${Number(value)} orders`, `${status.label} (${status.percentage}%)`];
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">{totalOrders}</span>
              <span className="text-sm text-gray-500">Active Orders</span>
            </div>
          </div>

          <div className="w-full space-y-3">
            {/* Statuses */}
            {statuses.map((status) => (
              <div
                key={status.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: ORDER_STATUS_COLOURS[status.id] }}
                  />
                  <span className="text-sm font-medium text-gray-600">{status.label}</span>
                </div>

                <span className="text-sm font-semibold text-gray-700">
                  {status.count} ({status.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // No active order data
        <div className="mt-5 flex h-72 items-center justify-center rounded-xl border border-dashed border-gray-200">
          <p className="text-sm text-gray-500">No active order data.</p>
        </div>
      )}
    </section>
  );
}
