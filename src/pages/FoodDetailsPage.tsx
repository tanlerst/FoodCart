import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FoodDetails from "../components/food/FoodDetails";
import type { Food } from "../types/food";
import { fetchFood } from "../helpers/menu/foodId";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router";
import { useWheel } from "../contexts/WheelContext";

export default function FoodDetailsPage() {
  const { addItem: addCart } = useCart();
  const { addItem: addWheel } = useWheel();
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
    if (!food) return;
    addWheel({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      category: food.category,
    });
    navigate("/menu");
  }

  function addToCart() {
    if (!food) return;
    addCart(food, quantity);
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
