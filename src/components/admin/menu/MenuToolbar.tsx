import { Search } from "lucide-react";

import type { AvailabilityFilter } from "../../../types/menu";

const AVAILABILITY_OPTIONS: {
  value: AvailabilityFilter;
  label: string;
}[] = [
  {
    value: "all",
    label: "All Availability",
  },
  {
    value: "available",
    label: "Available",
  },
  {
    value: "unavailable",
    label: "Unavailable",
  },
];

type MenuToolbarProps = {
  search: string;
  category: string;
  availability: AvailabilityFilter;
  categories: string[];

  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onAvailabilityChange: (value: AvailabilityFilter) => void;
};

export default function MenuToolbar({
  search,
  category,
  availability,
  categories,
  onSearchChange,
  onCategoryChange,
  onAvailabilityChange,
}: MenuToolbarProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-200 p-5 lg:flex-row lg:items-center">
      {/* Search bar */}
      <div className="relative flex-1">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search menu items..."
          className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      {/* Category filter */}
      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        aria-label="Filter by category"
        className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
      >
        <option value="all">All Categories</option>

        {categories.map((categoryName) => (
          <option key={categoryName} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </select>

      {/* Availability filter */}
      <select
        value={availability}
        onChange={(event) => onAvailabilityChange(event.target.value as AvailabilityFilter)}
        aria-label="Filter by availability"
        className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
      >
        {AVAILABILITY_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
