/* Order Bar is a single order under the admin order page, compiling to a list of orders */

import type { OrderStatus } from "../../types/OrderStatus";

type OrderBarProps = {
    orderId: string;
    customerName: string;
    items: number;
    totalPrice: number;
    status: OrderStatus;
    date: string;
    time: string;
    selected: boolean;
    onSelect: (orderId: string) => void;
}

function getStatusColor(status: OrderStatus): string {
    switch (status) {
        case "preparing":
            return "bg-yellow-200 text-yellow-800";
        case "completed":
            return "bg-green-200 text-green-800";
        case "cancelled":
            return "bg-red-200 text-red-800";
        default:
            return "";
    }
}

export default function OrderBar({ 
    orderId, 
    customerName,
    items,
    totalPrice,
    status,
    date,
    time,
    selected,
    onSelect
}: OrderBarProps) {

   
    return (

        <div className={`flex justify-between items-center p-4 rounded-lg shadow-md cursor-pointer ${selected ? "bg-blue-100" : "bg-white"}`}
            onClick={() => onSelect(orderId)}
        >
            <div className="flex flex-col">
                <span className="font-semibold">{customerName}</span>
                <span className="text-sm text-gray-500">{date} {time}</span>
            </div>
            
            <div className="flex flex-col items-end">
                <span className="text-sm">{items} items</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(status)}`}>
                {status}
            </div>
        </div>
        
    );

}

