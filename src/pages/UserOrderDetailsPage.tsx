import OrderInfoCard from "../components/order/OrderInfoCard";
import OrderStatusTracker from "../components/order/status_tracker/OrderStatusTracker";
import type { OrderDetails } from "../types/order";
import OrderItemsCard from "../components/order/OrderItemsCard";
import OrderPaymentSummary from "../components/order/OrderPaymentSummary";
import NavigationBar from "../components/common/NavigationBar";
import { getOrder } from "../helpers/order/getOrder";
import { formatOrder } from "../helpers/order/formatOrder";
import { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout";

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
      <UserLayout title="Your Order">
        <p>Loading</p>
      </UserLayout>
    );
  }

  if (!orderDetails) {
    return (
      <UserLayout title="Your Order">
        <p>No orders.</p>
      </UserLayout>
    );
  }

  return (
    <UserLayout title="Your Orders">
      <div className="space-y-4">
        <OrderInfoCard
          orderNumber={orderDetails.orderNumber}
          placedAt={orderDetails.placedAt}
          status={orderDetails.status}
        />

        <OrderStatusTracker status={orderDetails.status} />

        <OrderItemsCard items={orderDetails.items} />

        <OrderPaymentSummary
          subtotal={orderDetails.subtotal}
          gst={orderDetails.gst}
          serviceFee={orderDetails.serviceCharge}
          total={orderDetails.totalAmount}
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white">
        <NavigationBar />
      </div>
  </UserLayout>
    
  );
}
