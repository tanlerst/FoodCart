import type { FoodItem } from "../../../types/food";

import MenuEmptyState from "./MenuEmptyState";
import MenuTableRow from "./MenuTableRow";

type MenuTableProps = {
  items: FoodItem[];
  onEdit: (item: FoodItem) => void;
  onAvailabilityChange: (item: FoodItem, isAvailable: boolean) => void;
};

export default function MenuTable({ items, onEdit, onAvailabilityChange }: MenuTableProps) {
  if (items.length === 0) {
    return <MenuEmptyState />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px] border-collapse text-left">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-200 text-sm text-gray-600">
            <th className="px-5 py-4 font-semibold">Item</th>

            <th className="px-5 py-4 font-semibold">Category</th>

            <th className="px-5 py-4 font-semibold">Price</th>

            <th className="px-5 py-4 font-semibold">Prep Time</th>

            <th className="px-5 py-4 font-semibold">Availability</th>

            <th className="px-5 py-4 text-center font-semibold">Actions</th>
          </tr>
        </thead>

        {/* Table row */}
        <tbody>
          {items.map((item) => (
            <MenuTableRow
              key={item.id}
              item={item}
              onEdit={onEdit}
              onAvailabilityChange={onAvailabilityChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
