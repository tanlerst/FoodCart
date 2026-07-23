import type { WheelItem } from "../types/wheelItem";

export const SAMPLE_WHEEL_ITEMS: WheelItem[] = [
  {
    id: 1,
    name: "Spicy Ramen",
    price: 11.5,
    image: "",
    category: {name: "Main"},
  },
  {
    id: 2,
    name: "Chicken Pizza",
    price: 13.5,
    image: "",
    category: {name: "Pizza"},
  },
  {
    id: 3,
    name: "Mango Smoothie",
    price: 5.2,
    image: "",
    category: {name: "Drinks"},
  },
  {
    id: 4,
    name: "Truffle Fries",
    price: 6.9,
    image: "",
    category: {name: "Sides"},
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    price: 6.6,
    image: "",
    category: {name: "Dessert"},
  },
];

export const SELECTED_ITEM: WheelItem = {
  id: 1,
  name: "Cheese pizza",
  price:10,
  image:"",
  category: {name: "drink"}
};
