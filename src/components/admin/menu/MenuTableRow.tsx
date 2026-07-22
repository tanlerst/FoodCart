import { Pencil } from "lucide-react";

import type { FoodItem } from "../../../types/food";
import AvailabilityBadge from "./AvailabilityBadge";

type MenuTableRowProps = {
  item: FoodItem;
  onEdit: (item: FoodItem) => void;
};

export default function MenuTableRow({ item, onEdit }: MenuTableRowProps) {

  return (
    <tr className="border-b border-gray-100 transition last:border-b-0 hover:bg-orange-50/40">
      {/* Food item */}
      <td className="px-5 py-4">
        <div className="flex min-w-96 items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-20 w-20 shrink-0 rounded-lg object-cover"
          />

          <div>
            <h2 className="font-semibold text-gray-900">{item.name}</h2>

            {item.description && (
              <p className="mt-1 max-w-md text-sm leading-6 text-gray-500">{item.description}</p>
            )}

            {/* Recommended tag for recommended food items */}
            {item.isRecommended && (
              <span className="mt-2 inline-flex rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600">
                Recommended
              </span>
            )}
          </div>
        </div>
      </td>

      {/* Category */}
      <td className="px-5 py-4 text-sm font-medium text-gray-700">{item.category.name}</td>

      {/* Price */}
      <td className="px-5 py-4 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</td>

      {/* Time */}
      <td className="px-5 py-4 text-sm text-gray-700">{item.time} min</td>

      {/* isAvailable */}
      <td className="px-5 py-4">
        <AvailabilityBadge isAvailable={item.isAvailable} />
      </td>

      {/* Action buttons */}
      <td className="px-5 py-4">
        <div className="flex justify-center gap-3">
          {/* Edit button */}
          <button
            type="button"
            onClick={() => onEdit(item)}
            aria-label={`Edit ${item.name}`}
            title={`Edit ${item.name}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
          >
            <Pencil size={17} />
          </button>
        </div>
      </td>
    </tr>
  );
}
