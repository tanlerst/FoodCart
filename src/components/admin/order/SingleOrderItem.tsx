/* Admin Order Details Page Order Item */

/* food item in cart page */

import type { ItemData } from "../../../types/itemData";

type OrderItemProps = {
  cartItem: ItemData;
};

export default function OrderItem({ cartItem }: OrderItemProps) {
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
              {/* Food name */}
              <h3 className="text-xl font-bold text-gray-900">{cartItem.food.name}</h3>

              {/* Price */}
              <p className="mt-1 text-lg text-gray-600">${cartItem.food.price.toFixed(2)}</p>

              {/* Quantity */}
              <p className="mt-1 text-sm text-gray-500">Quantity: {cartItem.quantity}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center"></div>
        </div>
      </div>
    </div>
  );
}
