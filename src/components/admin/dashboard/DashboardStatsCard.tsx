import type { DashboardStat } from "../../../types/adminDashboard";

type DashboardStatCardProps = {
  stat: DashboardStat;
};

export default function DashboardStatCard({
  stat,
}: DashboardStatCardProps) {
  const Icon = stat.icon;

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${stat.iconBackgroundClassName}`}
        >
          <Icon
            size={25}
            className={stat.iconClassName}
          />
        </div>

        <div className="min-w-0">
          {/* Statistic label (total sales) */}
          <p className="text-sm font-medium text-gray-500">
            {stat.label}
          </p>

          {/* Statistic value */}
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {stat.value}
          </p>
        </div>
      </div>
    </article>
  );
}