import { X } from "lucide-react";
import type { WheelItem } from "../../types/wheelItem";

type WheelItemRowProps = {
  item: WheelItem;
  onRemove: (itemId: number) => void;
};

export default function WheelItemRow({ item, onRemove }: WheelItemRowProps) {
  return (
    <article className="flex items-center gap-4 border-b border-gray-100 py-4 last:border-b-0">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 shrink-0 rounded-xl object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-gray-900">{item.name}</h3>

        <p className="mt-1 text-sm text-gray-600">
          {/* {formatCurrency(item.price)} */}${item.price}
        </p>
      </div>

      {/* Remove item button */}
      <button
        type="button"
        onClick={() => onRemove(item.id)}
        title={`Remove ${item.name}`}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600"
      >
        <X size={20} />
      </button>
    </article>
  );
}
