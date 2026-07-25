import FoodCard from "./FoodCard";
import type { FoodItem } from "../../types/food";

type FoodGridProps = {
  foods: FoodItem[];
};

export default function FoodGrid({ foods }: FoodGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {foods.map((food) => (
        <FoodCard key={food.name} food={food} />
      ))}
    </div>
  );
}
