import type { TopSellingItem, TopSellingMetric } from "../../../types/adminDashboard";

type TopSellingItemRowProps = {
  item: TopSellingItem;
  position: number;
  metric: TopSellingMetric;
};

export default function TopSellingItemRow({ 
  item, 
  position, 
  metric,
}: TopSellingItemRowProps) {

  const text = 
    metric === "revenue"
      ? `$ ${item.revenue}`
      : `${item.orderCount} ${item.orderCount === 1 ? "order" : "orders"}`

  
  return (
    <article className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
        {position}
      </span>

      <img
        src={item.image}
        alt={item.name}
        className="h-14 w-14 shrink-0 rounded-xl bg-orange-50 object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-gray-900">{item.name}</h3>

        <p className="mt-1 text-sm text-gray-500">
          {text}
        </p>
      </div>
    </article>
  );
}
