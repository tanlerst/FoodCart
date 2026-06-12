import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FoodDetails from "../components/food/FoodDetails";
import type { Food } from "../types/Food";
import { fetchFood } from "../helpers/menu/foodId";

export default function FoodDetailsPage() {
  const { id } = useParams();
  const [food, setFood] = useState<Food | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function loadFood() {
      if (!id) {
        return;
      }

      try {
        const foodData = await fetchFood(Number(id));

        setFood(foodData);
      } catch (error) {
        console.error(error);
      }
    }

    loadFood();
  }, [id]);

  function addToCart() {
    // add to card logic
    alert(`Added ${quantity} of ${food?.name} to cart!`);
  }

  function addToWheel() {
    // add to wheel logic
    alert(`Added ${food?.name} to wheel!`);
  }

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <FoodDetails
      food={food}
      quantity={quantity}
      setQuantity={setQuantity}
      addToCart={addToCart}
      addToWheel={addToWheel}
    />
  );
}
