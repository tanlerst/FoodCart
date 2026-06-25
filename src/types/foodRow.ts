/* Food row type */

export type FoodRow = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  time: number;
  category: { name: string }[] | { name: string } | null;
};