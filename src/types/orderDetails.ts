/* order item status type, order status type, order detail item type, order detail type*/

// a particular item
export type OrderItemStatus = "preparing" | "served";

// an order
export type OrderStatus = "received" | "preparing" | "serving" | "complete" | "paid";

// Order item details (single item)
export type OrderDetailItem = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  estimatedMinutes: number;
  status: OrderItemStatus;
  servedAt?: string; // time served at e.g. Served at 12:00 PM
  estimatedReadyAt?: string; // Est. ready 12:00 PM
};

// order details (an order: a list of items)
export type OrderDetails = {
  orderNumber: string;
  placedAt: string;
  orderType: string;
  tableNumber: string;
  status: OrderStatus;
  items: OrderDetailItem[]; // list of items
  subtotal: number;
  serviceFee: number;
  total: number;
};
