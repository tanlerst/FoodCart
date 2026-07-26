/* Manages the food recommendation queue */

import { useEffect, useState } from "react";

import type { FoodItem } from "../../types/food";

type UseRecommendationQueueProps = {
  initialDishes: FoodItem[];
  onAddDish?: (dish: FoodItem) => void;
  onQueueEmpty: () => void;
};

export function useRecommendationQueue({
  initialDishes,
  onAddDish,
  onQueueEmpty,
}: UseRecommendationQueueProps) {
  const [dishes, setDishes] = useState<FoodItem[]>(initialDishes);

  useEffect(() => {
    setDishes(initialDishes);
  }, [initialDishes]);

  const currentDish = dishes[0] ?? null;

  // Move to next recommended dish
  function moveToNextDish() {
    setDishes((previousDishes) => {
      const nextDishes = previousDishes.slice(1);

      if (nextDishes.length === 0) {
        onQueueEmpty();
      }

      return nextDishes;
    });
  }

  function skipCurrentDish() {
    if (!currentDish) {
      return;
    }

    moveToNextDish();
  }

  function addCurrentDish() {
    if (!currentDish) {
      return;
    }

    onAddDish?.(currentDish);
    moveToNextDish();
  }

  return {
    currentDish,
    skipCurrentDish,
    addCurrentDish,
  };
}
