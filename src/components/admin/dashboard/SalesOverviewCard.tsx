import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { SalesDataPoint } from "../../../types/adminDashboard";

type SalesOverviewCardProps = {
  data: SalesDataPoint[];
};

const CHART_COLOUR = "#f97316";

const currencyFormatter = new Intl.NumberFormat("en-SG", {
  style: "currency",
  currency: "SGD",
});

export default function SalesOverviewCard({ data }: SalesOverviewCardProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-bold text-gray-900">Sales Overview</h2>

      {/* Chart */}
      {data.length > 0 ? (
        <div className="mt-5 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip
                formatter={(value) => [currencyFormatter.format(Number(value)), "Revenue"]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke={CHART_COLOUR}
                fill={CHART_COLOUR}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        // If no sales data available
        <div className="mt-5 flex h-72 items-center justify-center rounded-xl border border-dashed border-gray-200">
          <p className="text-sm text-gray-500">No sales data available.</p>
        </div>
      )}
    </section>
  );
}
