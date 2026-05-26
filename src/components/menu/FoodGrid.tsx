/* FoodGrid has many FoodCard components */

import FoodCard from "./FoodCard";
import home from "../../assets/menu/home-3.png";

export default function FoodGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <FoodCard
        food={{
          name: "Margherita Pizza",
          description: "Classic pizza with tomato sauce, mozzarella, and basil.",
          price: 12.99,
          imageUrl: home,
          timeToPrepare: 15,
        }}
      />
    </div>
  );
}
