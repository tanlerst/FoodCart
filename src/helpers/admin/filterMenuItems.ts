import type { FoodItem } from "../../types/food";
import type { AvailabilityFilter } from "../../types/menu";

type FilterMenuItemsParameters = {
  items: FoodItem[];
  search: string;
  category: string;
  availability: AvailabilityFilter;
};

export function filterMenuItems({
  items,
  search,
  category,
  availability,
}: FilterMenuItemsParameters): FoodItem[] {
  const normalizedSearch = search.trim().toLowerCase();

  return items.filter((item) => {
    const matchesSearch =
      normalizedSearch === "" ||
      item.name.toLowerCase().includes(normalizedSearch) ||
      item.description?.toLowerCase().includes(normalizedSearch);

    const matchesCategory = category === "all" || item.category.name === category;

    const matchesAvailability =
      availability === "all" || item.isAvailable === (availability === "available");

    return matchesSearch && matchesCategory && matchesAvailability;
  });
}
