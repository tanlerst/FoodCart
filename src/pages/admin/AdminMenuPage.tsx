import { useMemo, useState } from "react";

import type { FoodItem } from "../../types/food";
import type { AvailabilityFilter } from "../../types/menu";

import AdminLayout from "../../layouts/AdminLayout";
import AddItemButton from "../../components/admin/menu/AddItemButton";
import MenuPagination from "../../components/admin/menu/MenuPagination";
import MenuTable from "../../components/admin/menu/MenuTable";
import MenuToolbar from "../../components/admin/menu/MenuToolbar";

import { SAMPLE_MENU_ITEMS } from "../../data/menuItems";
import { filterMenuItems } from "../../helpers/admin/filterMenuItems";

const ITEMS_PER_PAGE = 5;

export default function AdminMenuPage() {

  const [items, setItems] =
    useState<FoodItem[]>(SAMPLE_MENU_ITEMS);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  const [availability, setAvailability] =
    useState<AvailabilityFilter>("all");

  const [currentPage, setCurrentPage] =
    useState(1);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      items.map(
        (item) => item.category.name,
      ),
    );

    return Array.from(
      uniqueCategories,
    ).sort();
  }, [items]);

  const filteredItems = useMemo(() => {
    return filterMenuItems({
      items,
      search,
      category,
      availability,
    });
  }, [
    items,
    search,
    category,
    availability,
  ]);

  const totalPages = Math.ceil(
    filteredItems.length /
      ITEMS_PER_PAGE,
  );

  const safeCurrentPage =
    totalPages === 0
      ? 1
      : Math.min(
          currentPage,
          totalPages,
        );

  const firstItemIndex =
    (safeCurrentPage - 1) *
    ITEMS_PER_PAGE;

  const lastItemIndex =
    firstItemIndex +
    ITEMS_PER_PAGE;

  const paginatedItems =
    filteredItems.slice(
      firstItemIndex,
      lastItemIndex,
    );

  function handleSearchChange(
    value: string,
  ) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleCategoryChange(
    value: string,
  ) {
    setCategory(value);
    setCurrentPage(1);
  }

  function handleAvailabilityFilterChange(
    value: AvailabilityFilter,
  ) {
    setAvailability(value);
    setCurrentPage(1);
  }

  function handleEdit(
    item: FoodItem,
  ) {
   // direct to edit page of selected food item
  }

  function handleDelete(
    item: FoodItem,
  ) {
    // delete logic to delete selected food item
  }

  function handleAddItem() {
    // direct to add item page
  }

  function handleAvailabilityChange(
    item: FoodItem,
    isAvailable: boolean,
  ) {
    setItems((currentItems) =>
      currentItems.map(
        (currentItem) =>
          currentItem.id === item.id
            ? {
                ...currentItem,
                isAvailable,
              }
            : currentItem,
      ),
    );
  }

  return (
    <AdminLayout
      title="Menu"
      description="Manage restaurant menu items."
    >
      <div className="mb-5 flex justify-end">
        <AddItemButton onClick={handleAddItem}/>
      </div>

      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <MenuToolbar
          search={search}
          category={category}
          availability={availability}
          categories={categories}
          onSearchChange={
            handleSearchChange
          }
          onCategoryChange={
            handleCategoryChange
          }
          onAvailabilityChange={
            handleAvailabilityFilterChange
          }
        />

        <div className="m-5 overflow-hidden rounded-xl border border-gray-200">
          <MenuTable
            items={paginatedItems}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAvailabilityChange={
              handleAvailabilityChange
            }
          />

          {/* Pagination */}
          <MenuPagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            startItem={
              filteredItems.length === 0
                ? 0
                : firstItemIndex + 1
            }
            endItem={Math.min(
              lastItemIndex,
              filteredItems.length,
            )}
            totalItems={
              filteredItems.length
            }
            onPageChange={
              setCurrentPage
            }
          />
        </div>
      </section>
    </AdminLayout>
  );
}