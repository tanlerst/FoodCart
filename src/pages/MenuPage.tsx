/* Main Menu Page of FoodCart */

import FoodGrid from "../components/menu/FoodGrid";
import SearchBar from "../components/menu/SearchBar";

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Menu</h1>
      <SearchBar />
      <FoodGrid />
    </div>
  );
}
