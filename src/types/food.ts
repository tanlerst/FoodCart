export type FoodItem = {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
  estimatedMinutes?: number;
  category: { name: string } | 
  { name: string }[] | 
  null;
  time: number;
}