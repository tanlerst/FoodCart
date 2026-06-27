/* Order Item List for admin order details page */

import type { OrderDetailsItem } from "../../../types/orderDetails";
// import type { ItemData } from "../../../types/itemData";
import OrderItem from "./SingleOrderItem";

type OrderItemListProps = {
  items: OrderDetailsItem[];
};

export default function OrderItemList({ items }: OrderItemListProps) {
  return (

    <div>
      {items.map((item) => (
        <OrderItem 
          key={item.id} 
          orderItem={item} 
        />
      ))}
    </div>
  );
}
