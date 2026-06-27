import OrderInfoCard from "../components/order/OrderInfoCard";
import OrderStatusTracker from "../components/order/status_tracker/OrderStatusTracker";
import type { OrderDetails } from "../types/orderDetails";
import OrderItemsCard from "../components/order/OrderItemsCard";
import OrderPaymentSummary from "../components/order/OrderPaymentSummary";
import NavigationBar from "../components/common/NavigationBar";

// currently hardcoding the order
const orderDetails: OrderDetails = {
  orderNumber: "FC12345",
  placedAt: "Placed on May 26, 2025 at 12:45 PM",
  orderType: "Dine In",
  tableNumber: "7",
  status: "complete",
  subtotal: 31.8,
  serviceFee: 1.2,
  total: 33.0,
  items: [
    {
      id: 1,
      name: "Cheese Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
      quantity: 1,
      price: 3.4,
      estimatedMinutes: 15,
      status: "served",
      servedAt: "12:58 PM",
    },
    {
      id: 2,
      name: "Cheese Pizza",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
      quantity: 1,
      price: 3.4,
      estimatedMinutes: 18,
      status: "served",
      servedAt: "1:05 PM",
    },
    {
      id: 3,
      name: "Ice Lemon Tea",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
      quantity: 2,
      price: 3.4,
      estimatedMinutes: 5,
      status: "preparing",
      estimatedReadyAt: "1:50 PM",
    },
  ],
};

export default function UserOrderDetailsPage() {
  return (
    <div className="min-h-screen bg-orange-50 pb-32">
      <main className="mx-auto max-w-4xl px-5 py-6">
        <OrderInfoCard
          orderNumber={orderDetails.orderNumber}
          placedAt={orderDetails.placedAt}
          orderType={orderDetails.orderType}
          tableNumber={orderDetails.tableNumber}
          status={orderDetails.status}
        />

        <OrderStatusTracker status={orderDetails.status} />

        <OrderItemsCard items={orderDetails.items} />

        <OrderPaymentSummary
          subtotal={orderDetails.subtotal}
          serviceFee={orderDetails.serviceFee}
          total={orderDetails.total}
        />
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white">
        <NavigationBar />
      </div>
    </div>
  );
}
