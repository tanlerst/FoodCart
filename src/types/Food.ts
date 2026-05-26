/* The type definition for a food item, used in the menu and cart */

export type Food = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  timeToPrepare: number; // in minutes
};
