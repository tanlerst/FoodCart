import { useSwipeable } from "react-swipeable";
import type { FoodItem } from "../../types/food";
import DishCard from "./DishCard";
import SkipIcon from "./SkipIcon";
import AddIcon from "./AddIcon";

type SwipeableDishCardProps = {
  dish: FoodItem;
  onSkip: () => void;
  onAdd: () => void;
};

const SWIPE_DISTANCE = 80;

export default function SwipeableDishCard({
  dish,
  onSkip,
  onAdd,
}: SwipeableDishCardProps) {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: onSkip,
    onSwipedRight: onAdd,
    preventScrollOnSwipe: true,
    delta: SWIPE_DISTANCE,
  });

  return (
    <div
      {...swipeHandlers}
      className="relative mx-auto mt-4 w-[90%] touch-pan-y select-none"
    >
      <DishCard dish={dish} />

      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SkipIcon onSkip={onSkip} />
      </div>

      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
        <AddIcon onAdd={onAdd} />
      </div>
    </div>
  );
}