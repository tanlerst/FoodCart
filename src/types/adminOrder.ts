export type adminOrders = {
  userId: number;
  orderNumber: string;
  username: string;
  orderTime: string;
  itemQty: number;
  price: number;
  items: number[];
  status: number;
};

export type adminOrderItems = {
  id: number;
  orderNumber: string;
  userId: number;
  username: string;
  orderTime: string;
  itemQty: number;
  price: number;
  status: number;
};
