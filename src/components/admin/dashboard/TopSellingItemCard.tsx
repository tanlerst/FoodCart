import type { TopSellingItem, TopSellingMetric } from "../../../types/adminDashboard";
import TopSellingItemRow from "./TopSellingItemRow";

type TopSellingItemsCardProps = {
  title: string;
  items: TopSellingItem[];
  metric: TopSellingMetric;
};

export default function TopSellingItemsCard({ title, items, metric }: TopSellingItemsCardProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>

      {items.length > 0 ? (
        <div className="mt-5 divide-y divide-gray-100">
          {items.map((item, index) => (
            <TopSellingItemRow key={item.id} item={item} position={index + 1} metric={metric} />
          ))}
        </div>
      ) : (
        // No item
        <div className="mt-5 flex min-h-48 items-center justify-center rounded-xl border border-dashed border-gray-200">
          <p className="text-sm text-gray-500">No sales data available.</p>
        </div>
      )}
    </section>
  );
}
