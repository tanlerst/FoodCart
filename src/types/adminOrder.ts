export type adminOrders = {
  userId: number;
  username: string;
  orderTime: string;
  itemQty: number;
  price: number;
  items: number[];
  status: number;
};

export type adminOrderItems = {
  id: number;
  userId: number;
  username: string;
  orderTime: string;
  itemQty: number;
  price: number;
  status: number;
};
