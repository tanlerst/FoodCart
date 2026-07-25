/* Food Recommendation page */

import BrowseMenuButton from "./BrowseMenuButton";
import DishCard from "./DishCard";
import SkipCard from "./SkipCard";
import AddCard from "./AddCard";
import SkipIcon from "./SkipIcon";
import AddIcon from "./AddIcon";
import AddDishButton from "./AddDishButton";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import type { FoodItem } from "../../types/food";
import CancelButton from "../common/CancelButton";

type FoodRecommendationPageProps = {
  recommendedDishes: FoodItem[];
  onAddDish?: (dish: FoodItem) => void;
};

export default function FoodRecommendationPage({
  recommendedDishes,
  onAddDish,
}: FoodRecommendationPageProps) {
  const navigate = useNavigate();
  const [dishes, setDishes] = useState(recommendedDishes);

  function handleClose() {
    navigate("/menu");
  }

  const currentDish = dishes[0];
  if (!currentDish) {
    return null;
  }

  useEffect(() => {
    setDishes(recommendedDishes);
  }, [recommendedDishes]);

  function handleSkip() {
    setDishes((prev) => {
      const next = prev.slice(1);
      if (next.length === 0) {
        navigate("/menu");
      }

      return next;
    });
  }

  function handleAdd() {
    onAddDish?.(currentDish);
    handleSkip();
  }

  return (
    <main className="min-h-screen bg-white p-4">
      <div className="relative mx-auto min-h-screen max-w-md rounded-2xl bg-white-100 p-10 shadow-md">
        {/* Close button */}
        <CancelButton onClick={handleClose} />

        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <h1 className="text-lg font-semibold mb-2">Recommended for you</h1>

          <h1 className="text-3xl font-bold mb-2">Swipe to choose</h1>

          <p className="mx-auto mt-2 text-sm text-center text-gray-600">
            Swipe right to add to your order or swipe left to skip. Browse the menu for more
            options.
          </p>
        </div>

        {/* Dish Card */}

        <div className="mx-auto mt-6 flex w-[80%] items-center justify-between">
          <SkipCard onSkip={handleSkip} />
          <AddCard onAdd={handleAdd} />
        </div>
        <div className="relative mx-auto mt-4 w-[80%] ">
          <DishCard dish={currentDish} />

          {/* Skip Icon (left) */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
            <SkipIcon onSkip={handleSkip} />
          </div>

          {/* Add Icon (right) */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
            <AddIcon onAdd={handleAdd} />
          </div>
        </div>

        {/* Browse Menu and Add Dish Buttons */}

        <div className="flex justify-center gap-4 mt-10">
          <BrowseMenuButton onBrowseMenu={handleClose} />

          <AddDishButton onAddDish={handleAdd} />
        </div>
      </div>
    </main>
  );
}
