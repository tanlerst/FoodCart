import FoodGrid from "../components/menu/FoodGrid";
import SearchBar from "../components/menu/SearchBar";
import NavigationBar from "../components/menu/NavigationBar";
import CategoryTabs from "../components/menu/CategoryTabs";
import { menuData } from "../helpers/menu/menuData";

export default function MenuPage() {
  const { filteredFoods, categories, search, setSearch, catTab, setCatTab } = menuData();
  const pageTitle = search
    ? `Search results for "${search}"`
    : catTab === "All"
      ? "All Categories"
      : `${catTab} Category`;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{pageTitle}</h1>
      <SearchBar searchWord={search} setSearchWord={setSearch} />

      <CategoryTabs categories={categories} chosen_category={catTab} changeCategory={setCatTab} />
      <FoodGrid foods={filteredFoods} />
      <NavigationBar />
    </div>
  );
}
