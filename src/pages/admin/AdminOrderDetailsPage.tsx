/* Admin Order Details Page */

import AdminOrderItemsCard from "../../components/admin/order/AdminOrderItemsCard";
import type { OrderDetailsItem, OrderDetails } from "../../types/orderDetails";
import AdminSideBar from "../../components/admin/AdminSideBar";
import { getOrderAdmin } from "../../helpers/admin/getOrderAdmin";
import { formatOrder } from "../../helpers/order/formatOrder";
import { useEffect, useState } from "react";


export default function AdminOrderDetailPage() {
const orderItems: OrderDetailsItem[] = [
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
];


  // const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function loadOrder() {
  //     try {
  //       const orderData = await getOrderAdmin(orderId);

  //       if (!orderData) {
  //         setOrderDetails(null);
  //         return;
  //       }

  //       setOrderDetails(formatOrder(orderData));
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadOrder();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex min-h-screen bg-gray-50">
  //       {/* Side bar */}
  //       <AdminSideBar />
        
  //       <div className="p-8">Loading...</div>
  //     </div>
  //   );
  // }

  // if (!orderDetails) {
  //   return (
  //     <div className="flex min-h-screen bg-gray-50">
  //       {/* Side bar */}
  //       <AdminSideBar />
        
  //       <div className="p-8">No orders.</div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side bar */}
      <AdminSideBar />

      <div className="flex-1 bg-orange-50 px-8 py-8">
        <AdminOrderItemsCard items={orderItems} />
      </div>
    </div>
  );
}
