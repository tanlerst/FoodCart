/**
 *  @file CategoryCard.tsx
 *  @author Xi Yan
 *  @version 1.0.0
 *  @description This file is the category component for the surprise option page.
 *                It displays a list of category options for the user to select.
 */

import DietaryOptionButton from "./OptionButton";
import { useEffect, useState } from "react";
import { getCategories } from "../../../helpers/admin/getCategories";

type CategoryCardProps = {
  selectedCategories: string[];
  setSelectedCategory: (categories: string[]) => void;
};

export default function CategoryCard({
  selectedCategories: selectedCategory,
  setSelectedCategory,
}: CategoryCardProps) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(["All categories", ...data.map((category) => category.name)]);
      } catch (error) {
        console.error(error);
      }
    }
    loadCategories();
  }, []);

  function handleCategory(category: string) {
    if (category === "All categories") {
      setSelectedCategory(["All categories"]);
      return;
    }

    setSelectedCategory(
      selectedCategory.includes(category)
        ? selectedCategory.filter((item) => item !== category)
        : [...selectedCategory.filter((item) => item !== "All categories"), category],
    );
  }

  return (
    <section>
      <div className="mt-2"></div>
      <h2 className="mb-1 text-lg font-bold">Categories</h2>

      <p className="mb-2 text-sm text-gray-600">Choose your preferred categories</p>

      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <DietaryOptionButton
            key={category}
            option={category}
            isSelected={selectedCategory.includes(category)}
            onSelect={() => handleCategory(category)}
          />
        ))}
      </div>
    </section>
  );
}
