/* Loads recommended food items */

import { useEffect, useState } from "react";

import { getRecommended } from "../menu/getRecommended";
import type { FoodItem } from "../../types/food";

type UseRecommendedFoodsResult = {
  foods: FoodItem[];
  loading: boolean;
  error: string | null;
};

export function useRecommendedFoods(): UseRecommendedFoodsResult {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRecommendations() {
      try {
        setLoading(true);
        setError(null);

        const recommendedFoods = await getRecommended();

        setFoods(recommendedFoods);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to load recommendations.");
      } finally {
        setLoading(false);
      }
    }

    loadRecommendations();
  }, []);

  return {
    foods,
    loading,
    error,
  };
}
