import { useNavigate } from "react-router";

import FoodRecommendationCard from "../components/foodRecommendations/FoodRecommendationCard";
import { useCart } from "../contexts/CartContext";
import { useRecommendedFoods } from "../helpers/foodRecommendation/useRecommendedFoods";
import { useRecommendationQueue } from "../helpers/foodRecommendation/useRecommendationQueue";
import type { FoodItem } from "../types/food";

export default function FoodRecommendationPage() {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const { foods, loading, error } = useRecommendedFoods();

  function navigateToMenu() {
    navigate("/menu");
  }

  function addDishToCart(dish: FoodItem) {
    addItem(dish, 1);
  }

  const { currentDish, skipCurrentDish, addCurrentDish } = useRecommendationQueue({
    initialDishes: foods,
    onAddDish: addDishToCart,
    onQueueEmpty: navigateToMenu,
  });

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-gray-600">Loading recommendations...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white p-8">
        <p className="text-center text-red-600">{error}</p>
      </main>
    );
  }

  if (!currentDish) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white p-8">
        <p className="text-center text-gray-600">No recommendations available.</p>
      </main>
    );
  }

  return (
    <FoodRecommendationCard
      dish={currentDish}
      onClose={navigateToMenu}
      onSkip={skipCurrentDish}
      onAdd={addCurrentDish}
    />
  );
}
