import OrderInfoCard from "../components/order/OrderInfoCard";
import OrderStatusTracker from "../components/order/status_tracker/OrderStatusTracker";
import type { OrderDetails } from "../types/order";
import OrderItemsCard from "../components/order/OrderItemsCard";
import OrderPaymentSummary from "../components/order/OrderPaymentSummary";
import NavigationBar from "../components/common/NavigationBar";
import { getOrder } from "../helpers/order/getOrder";
import { formatOrder } from "../helpers/order/formatOrder";
import { useEffect, useState } from "react";
import LogoutButton from "../components/auth/LogoutButton";

export default function UserOrderDetailsPage() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrder() {
      try {
        const orderData = await getOrder();

        if (!orderData) {
          setOrderDetails(null);
          return;
        }

        setOrderDetails(formatOrder(orderData));
      } finally {
        setLoading(false);
      }
    }
    loadOrder();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto bg-orange-50 py-8 pb-32">
        <div className="p-8">Loading...</div>

        <div className="fixed bottom-0 left-0 right-0 bg-white">
          <NavigationBar />
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="container mx-auto bg-orange-50 py-8 pb-28">
        <div className="p-8">No orders.</div>

        <div className="fixed bottom-0 left-0 right-0 bg-white">
          <NavigationBar />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 px-4 pb-28 pt-3">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex items-center justify-between px-4 sm:px-6">
          <h1 className="text-3xl font-bold">Your Order</h1>
          <LogoutButton />
        </div>

        <div className="mx-auto max-w-4xl">
          <OrderInfoCard
            orderNumber={orderDetails.orderNumber}
            placedAt={orderDetails.placedAt}
            // tableNumber={orderDetails.tableNumber}
            status={orderDetails.status}
          />

          <OrderStatusTracker status={orderDetails.status} />

          <OrderItemsCard items={orderDetails.items} />

          <OrderPaymentSummary
            subtotal={orderDetails.subtotal}
            gst={orderDetails.gst}
            serviceFee={orderDetails.serviceFee}
            total={orderDetails.total}
          />
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white">
          <NavigationBar />
        </div>
      </div>

    </main>
    
  );
}
