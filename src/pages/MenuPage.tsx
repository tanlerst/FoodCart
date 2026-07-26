import FoodGrid from "../components/menu/FoodGrid";
import SearchBar from "../components/menu/SearchBar";
import CategoryTabs from "../components/menu/CategoryTabs";
import { menuData } from "../helpers/menu/menuData";
import UserLayout from "../layouts/UserLayout";

export default function MenuPage() {
  const { filteredFoods, categories, search, setSearch, catTab, setCatTab } = menuData();
  const pageTitle = search
    ? `Search results for "${search}"`
    : catTab === "All"
      ? "All Categories"
      : `${catTab} Category`;
  return (
    <UserLayout title={pageTitle}>
      <SearchBar searchWord={search} setSearchWord={setSearch} />

      <CategoryTabs categories={categories} chosen_category={catTab} changeCategory={setCatTab} />
      <FoodGrid foods={filteredFoods} />
    </UserLayout>
  );
}
