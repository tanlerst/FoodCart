/* Order Table component under the admin order page, showing a list of orders */

import { useState } from "react";
import OrderBar from "./OrderBar";
// import Pagination from "./Pagination";

const orders = [
    {
        orderId: "000001",
        customerName: "John Doe",
        items: 3,
        totalPrice: 25.50,
        status: "preparing",
        date: "2023-08-01",
        time: "12:30 PM"
    },
    {
        orderId: "000002",
        customerName: "Jane Smith",
        items: 2,
        totalPrice: 15.00,
        status: "completed",
        date: "2023-08-02",
        time: "1:15 PM"
    }

];

export default function OrderTable() {

    const [selectedOrder, setSelectedOrder] = useState<string[]>([]);

    function handleSelectOrder(orderId: string) {
        if (selectedOrder.includes(orderId)) {
            setSelectedOrder(selectedOrder.filter(id => id !== orderId));
        } else {
            setSelectedOrder([...selectedOrder, orderId]);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            {orders.map(order => (
                <OrderBar 
                    key={order.orderId}
                    orderId={order.orderId}
                    customerName={order.customerName}
                    items={order.items}
                    totalPrice={order.totalPrice}
                    status={order.status as any}
                    date={order.date}
                    time={order.time}
                    selected={selectedOrder.includes(order.orderId)}
                    onSelect={handleSelectOrder}
                />
            ))}

        </div>
    );
}