import { Trash2 } from "lucide-react";
import type { WheelItem } from "../../types/wheelItem";
import WheelItemRow from "./WheelItemRow";

type WheelItemListProps = {
  items: WheelItem[];
  onRemove: (itemId: number) => void;
  onClear: () => void;
};

export default function WheelItemList({
  items,
  onRemove,
  onClear,
}: WheelItemListProps) {
  return (
    <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-gray-900">
          Your Items ({items.length})
        </h2>

        {items.length > 0 && (
          // Clear all button
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-sm font-medium text-orange-600 transition hover:text-orange-700"
          >
            Clear All
            <Trash2 size={15} />
          </button>
        )}
      </div>

      <div className="mt-2">
        {/* Wheel items */}
        {items.map((item) => (
          <WheelItemRow
            key={item.id}
            item={item}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  );
}