/* Cart Item type */

import type { Food } from "./food";

export type CartItemData = {
  food: Food;
  quantity: number;
};
