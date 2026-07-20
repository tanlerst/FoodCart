export type FoodItem = {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
  isRecommended?: boolean; // for food recommendations
  isAvailable?: boolean; // to indicate if the food item is available for ordering
  category: {
    name: string;
  };
  time: number;
};
