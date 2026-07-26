/* Food recommendation card */

import type { FoodItem } from "../../types/food";
import CancelButton from "../common/CancelButton";
import AddCard from "./AddCard";
import AddDishButton from "./AddDishButton";
import BrowseMenuButton from "./BrowseMenuButton";
import SkipCard from "./SkipCard";
import SwipeableDishCard from "./SwipeableDishCard";

type FoodRecommendationViewProps = {
  dish: FoodItem;
  onClose: () => void;
  onSkip: () => void;
  onAdd: () => void;
};

export default function FoodRecommendationView({
  dish,
  onClose,
  onSkip,
  onAdd,
}: FoodRecommendationViewProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative mx-auto min-h-screen max-w-md bg-white p-10 shadow-md">
        {/* Close button */}
        <CancelButton onClick={onClose} />

        {/* Header */}
        <header className="flex flex-col items-center justify-center gap-4">
          <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
            Swipe to choose
          </h1>

          <p className="text-center text-sm text-gray-600">
            Swipe right to add to your order or swipe left to
            skip. Browse the menu for more options.
          </p>
        </header>

        {/* Top action controls */}
        <div className="mx-auto mt-6 flex w-[80%] items-center justify-between">
          <SkipCard onSkip={onSkip} />

          <AddCard onAdd={onAdd} />
        </div>

        {/* Dish card */}
        <SwipeableDishCard
          dish={dish}
          onSkip={onSkip}
          onAdd={onAdd}
        />

        {/* Bottom action buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <BrowseMenuButton onBrowseMenu={onClose} />

          <AddDishButton onAddDish={onAdd} />
        </div>
      </div>
    </main>
  );
}