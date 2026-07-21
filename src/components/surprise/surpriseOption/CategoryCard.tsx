/**
 *  @file CategoryCard.tsx
 *  @author Xi Yan
 *  @version 1.0.0
 *  @description This file is the category component for the surprise option page.
 *                It displays a list of category options for the user to select.
 */

import DietaryOptionButton from "./OptionButton";

type CategoryCardProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

// fetch categories from database
const categories = ["All categories", "Pizza", "Drink", "Dessert"];

export default function CategoryCard({ selectedCategory, setSelectedCategory }: CategoryCardProps) {
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
            isSelected={selectedCategory === category}
            onSelect={() => setSelectedCategory(category)}
          />
        ))}
      </div>
    </section>
  );
}
