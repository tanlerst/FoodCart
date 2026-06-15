/* Cart Item type */

import type { Food } from "./Food";

export type CartItemData = {
  food: Food;
  quantity: number;
};
