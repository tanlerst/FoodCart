/* Food Details Component */

import React from "react";
import { useNavigate } from "react-router";
import type { Food } from "../../types/food";

type FoodDetailsProps = {
  food: Food;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: () => void;
  addToWheel: () => void;
};

export default function FoodDetails({
  food,
  quantity,
  setQuantity,
  addToCart,
  addToWheel,
}: FoodDetailsProps) {
  const navigate = useNavigate();
  const totalPrice = food.price * quantity;

  return (
    <div className="min-h screen bg-orange-50 p-4">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="w-64 mx-auto mt-4">
            <img src={food.image} alt={food.name} className="w-full aspect-square object-cover " />
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
            <p className="text-gray-700 mb-4">{food.description}</p>
            <p className="text-xl font-semibold text-orange-600 mb-4">${food.price.toFixed(2)}</p>

            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={addToCart}
              className="w-full px-4 py-2 bg-orange-600 text-white rounded"
            >
              Add to Cart - ${totalPrice.toFixed(2)}
            </button>

            <button
              onClick={addToWheel}
              className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded"
            >
              Add to Wheel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
