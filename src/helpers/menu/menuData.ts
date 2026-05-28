import { useEffect, useMemo, useState } from "react";
import { fetchMenu, fetchCategories } from "./menuRead.ts";
import type { Food } from "../../types/Food.ts";

function filterFoods(foods: Food[], category: string, search: string): Food[] {
  search = search.trim().toLowerCase();

  if (search) {
    return foods.filter((food) => food.name.toLowerCase().includes(search));
  }

  if (category === "All") {
    return foods;
  }

  return foods.filter((food) => food.category.name === category);
}

export function menuData() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [catTab, setCatTab] = useState("All");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [foodsData, categoriesData] = await Promise.all([fetchMenu(), fetchCategories()]);

        setFoods(foodsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load menu");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const filteredFoods = useMemo(() => filterFoods(foods, catTab, search), [foods, catTab, search]);

  return {
    filteredFoods,
    categories,
    search,
    setSearch,
    catTab,
    setCatTab,
    loading,
    error,
  };
}
