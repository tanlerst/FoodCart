import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FoodDetails from "../components/food/FoodDetails";
import type { Food } from "../types/food";
import { fetchFood } from "../helpers/menu/foodId";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

export default function FoodDetailsPage() {
  const { addItem } = useCart();
  const { id } = useParams();
  const [food, setFood] = useState<Food | null>(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

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

  if (!food) {
    return <div>Loading...</div>;
  }

  function addToWheel() {
    // add to wheel logic
    alert(`Added ${food?.name} to wheel!`);
  }

  function addToCart() {
    if (!food) return;
    addItem(food, quantity);
    navigate("/menu");
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
