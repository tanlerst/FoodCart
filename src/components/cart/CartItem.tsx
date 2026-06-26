/* food item in cart page */

import type { ItemData } from "../../types/itemData";

type CartItemProps = {
  cartItem: ItemData;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  removeItem: (foodId: number) => void;
};

export default function CartItem({
  cartItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}: CartItemProps) {
  return (
    <div className="mx-auto mb-5 w-full max-w-4xl rounded-2xl bg-white p-6 shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={cartItem.food.image}
          alt={cartItem.food.name}
          className="h-24 w-24 rounded-xl object-cover"
        />

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{cartItem.food.name}</h3>

              <p className="mt-1 text-lg text-gray-600">${cartItem.food.price.toFixed(2)}</p>
            </div>

            <button
              type="button"
              onClick={() => removeItem(cartItem.food.id)}
              className="rounded-xl bg-red-500 px-4 py-2 font-semibold text-white"
            >
              Remove
            </button>
          </div>

          <div className="mt-4 flex items-center">
            <button
              type="button"
              onClick={decrementQuantity}
              className="rounded-l-xl bg-gray-200 px-4 py-2 text-lg font-semibold text-gray-700"
            >
              -
            </button>

            <span className="bg-gray-100 px-6 py-2 text-lg font-semibold text-gray-800">
              {cartItem.quantity}
            </span>

            <button
              type="button"
              onClick={incrementQuantity}
              className="rounded-r-xl bg-gray-200 px-4 py-2 text-lg font-semibold text-gray-700"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
