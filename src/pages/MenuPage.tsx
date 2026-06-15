import FoodGrid from "../components/menu/FoodGrid";
import SearchBar from "../components/menu/SearchBar";
import NavigationBar from "../components/common/NavigationBar";
import CategoryTabs from "../components/menu/CategoryTabs";
import { menuData } from "../helpers/menu/menuData";
import LogoutButton from "../components/auth/LogoutButton";
import { useNavigate } from "react-router";

export default function MenuPage() {
  const navigate = useNavigate();
  const { filteredFoods, categories, search, setSearch, catTab, setCatTab } = menuData();
  const pageTitle = search
    ? `Search results for "${search}"`
    : catTab === "All"
      ? "All Categories"
      : `${catTab} Category`;
  return (
    <div className="container mx-auto px-4 py-8 pb-30">
      <h1 className="text-3xl font-bold">{pageTitle}</h1>

      <div className="flex justify-end mb-4">
        <LogoutButton/>
      </div>
      <SearchBar searchWord={search} setSearchWord={setSearch} />

      <CategoryTabs categories={categories} chosen_category={catTab} changeCategory={setCatTab} />
      <FoodGrid foods={filteredFoods} />

      <div className="fixed bottom-0 left-0 right-0 bg-orange-50">
        <NavigationBar />
      </div>
    </div>
  );
}
