/* Food Recommendation page */
import { useState, useEffect } from "react";
import type { FoodItem } from "../types/food";
import FoodRecommendation from "../components/foodRecommendations/FoodRecommendationCard";
import { getRecommended } from "../helpers/menu/getRecommended";
import { useCart } from "../context/CartContext";

export default function FoodRecommendationPage() {
  const [recommended, setRecommended] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    async function loadRecommendations() {
      try {
        const foods = await getRecommended();
        setRecommended(foods);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load recommendations.");
      } finally {
        setLoading(false);
      }
    }

    loadRecommendations();
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  function handleAddDish(dish: FoodItem) {
    addItem(dish, 1);
  }

  return <FoodRecommendation recommendedDishes={recommended} onAddDish={handleAddDish} />;
}
