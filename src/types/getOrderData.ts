export type UserRow = {
  id: number;
};

export type OrderRow = {
  id: number;
  orderNumber: string;
  food: number;
  quantity: number;
  status: number;
  ordertime: string;
};

export type FoodRow = {
  id: number;
  name: string;
  price: number;
  image: string;
  time: number;
};

export type OrderData = {
  authUserId: string;
  userRow: UserRow;
  orderRows: OrderRow[];
  foodRows: FoodRow[];
  orderNumber: string;
};
