/* Admin Order Details Page */

import AdminOrderItemsCard from "../../components/admin/order/AdminOrderItemsCard";
import type { ItemData } from "../../types/itemData";
import AdminSideBar from "../../components/admin/AdminSideBar"

const orderItems: ItemData[] = [
  {
    food: {
      id: 1,
      name: "Cheese Pizza",
      price: 12.9,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
      category: {
        name: "Pizza",
      },
      time: 1,
    },
    quantity: 1,
  },
  {
    food: {
      id: 2,
      name: "Iced Lemon Tea",
      price: 6.0,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
      category: {
        name: "Drinks",
      },
      time: 1,
    },
    quantity: 1,
  },
  {
    food: {
      id: 3,
      name: "Garlic Bread",
      price: 4.5,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
      category: {
        name: "Sides",
      },
      time: 1,
    },
    quantity: 1,
  },
];

export default function AdminOrderDetailPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side bar */}
      <AdminSideBar/>
      
      <div className="flex-1 bg-orange-50 px-8 py-8">
        <AdminOrderItemsCard cartItems={orderItems} />
      </div>
    </div>
  );
}
