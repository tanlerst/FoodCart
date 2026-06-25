import FoodCard from "./FoodCard";
import type { Food } from "../../types/food";

type FoodGridProps = {
  foods: Food[];
};

export default function FoodGrid({ foods }: FoodGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {foods.map((food) => (
        <FoodCard key={food.name} food={food} />
      ))}
    </div>
  );
}
