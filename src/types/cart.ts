/* Cart Item type */

import type { FoodItem } from "./food";

export type CartItem = {
  food: FoodItem;
  quantity: number;
};
