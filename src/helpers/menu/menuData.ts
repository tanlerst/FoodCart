import { useEffect, useMemo, useState } from "react";
import { fetchMenu, fetchCategories } from "./menuRead.ts";
import type { FoodItem } from "../../types/food.ts";

function filterFoods(foods: FoodItem[], category: string, search: string): FoodItem[] {
  const normSearch = search.trim().toLowerCase();

  return foods.filter((food) => {
    const matchesSearch = !normSearch || food.name.toLowerCase().includes(normSearch);
    const matchesCat = category === "All" || food.category.name === category;
    return matchesSearch && matchesCat;
  });
}

export function menuData() {
  const [foods, setFoods] = useState<FoodItem[]>([]);
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
