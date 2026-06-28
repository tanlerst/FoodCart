/* Food Card Component */
/* Updated FoodCard so that it is clickable and navigates to the food details page */

import type { Food } from "../../types/food";
import timer from "../../assets/menu/timer.png";
import { useNavigate } from "react-router-dom";

type FoodCardProps = {
  food: Food;
};

export default function FoodCard({ food }: FoodCardProps) {
  const navigate = useNavigate();

  return (
    // onClick navigate to food details page with food id
    <div
      onClick={() => navigate("/food/" + food.id)}
      className="bg-white rounded-2xl shadow-md overflow-hidden pt-4"
    >
      <div className="flex items-center gap-2 px-4">
        <img src={timer} alt="Time" className="w-6 h-6" />

        <p className="text-sm text-gray-500 mt-2">{food.time} mins</p>
      </div>

      <div className="px-8 mt-2">
        {/* image size fit to container */}
        <img src={food.image} alt={food.name} className="w-full h-40 object-contain rounded-2xl" />
      </div>

      <div className="pt-4 px-4 mb-2">
        <div className="p-2">
          <h3 className="text-lg font-bold text-gray-900">{food.name}</h3>
          {/* toFixed(2) here rounds to 2 decimal places */}
          <p className="text-orange-600 font-semibold mt-1">${food.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
