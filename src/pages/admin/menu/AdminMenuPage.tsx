import { useMemo, useState, useEffect } from "react";
import type { FoodItem } from "../../../types/food";
import type { AvailabilityFilter } from "../../../types/menu";
import { getItems } from "../../../helpers/admin/adminMenuRead";
import AdminLayout from "../../../layouts/AdminLayout";
import AddItemButton from "../../../components/admin/menu/AddItemButton";
import MenuPagination from "../../../components/admin/menu/MenuPagination";
import MenuTable from "../../../components/admin/menu/MenuTable";
import MenuToolbar from "../../../components/admin/menu/MenuToolbar";
import { useNavigate } from "react-router";
import { filterMenuItems } from "../../../helpers/admin/filterMenuItems";
const ITEMS_PER_PAGE = 5;

export default function AdminMenuPage() {
  const [items, setItems] = useState<FoodItem[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [availability, setAvailability] = useState<AvailabilityFilter>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const categories = useMemo(() => {
    const uniqueCategories = new Set(items.map((item) => item.category.name));

    return Array.from(uniqueCategories).sort();
  }, [items]);

  const filteredItems = useMemo(() => {
    return filterMenuItems({
      items,
      search,
      category,
      availability,
    });
  }, [items, search, category, availability]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const safeCurrentPage = totalPages === 0 ? 1 : Math.min(currentPage, totalPages);
  const firstItemIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const lastItemIndex = firstItemIndex + ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    async function loadMenu() {
      try {
        const menu = await getItems();
        setItems(menu);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to load menu.");
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  function handleSearchChange(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleCategoryChange(value: string) {
    setCategory(value);
    setCurrentPage(1);
  }

  function handleAvailabilityFilterChange(value: AvailabilityFilter) {
    setAvailability(value);
    setCurrentPage(1);
  }

  function handleEdit(item: FoodItem) {
    navigate("/edititem", {
      state: { item },
    });
  }

  function handleAddItem() {
    navigate("/additem");
  }

  function handleAvailabilityChange(item: FoodItem, isAvailable: boolean) {
    // logic to update the availability of the selected food item
  }

  if (loading) {
    return (
      <AdminLayout title="Menu" description="Manage restaurant menu items.">
        <div className="p-8">Loading...</div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout title="Menu" description="Manage restaurant menu items.">
        <div>{error}</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Menu" description="Manage restaurant menu items.">
      <div className="mb-5 flex justify-end">
        <AddItemButton onClick={handleAddItem} />
      </div>

      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <MenuToolbar
          search={search}
          category={category}
          availability={availability}
          categories={categories}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onAvailabilityChange={handleAvailabilityFilterChange}
        />

        <div className="m-5 overflow-hidden rounded-xl border border-gray-200">
          <MenuTable
            items={paginatedItems}
            onEdit={handleEdit}
            onAvailabilityChange={handleAvailabilityChange}
          />

          {/* Pagination */}
          <MenuPagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            startItem={filteredItems.length === 0 ? 0 : firstItemIndex + 1}
            endItem={Math.min(lastItemIndex, filteredItems.length)}
            totalItems={filteredItems.length}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </AdminLayout>
  );
}
