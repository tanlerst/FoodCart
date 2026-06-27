/* Status badge for an order item in admin order details page and user order page*/

import type { OrderItemStatus } from "../../types/orderDetails";

type StatusBadgeProps = {
    status: OrderItemStatus;
};

const SERVED_FORMAT = "bg-green-100 text-green-700";
const PREPARING_FORMAT = "bg-orange-100 text-orange-600";
const SERVED_TEXT = "✔ Served";
const PREPARING_TEXT = "⏲ Preparing";

export default function StatusBadge({ status }: StatusBadgeProps) {
    const isServed = status === "served";

    return (
        <span
            className={`inline-flex rounded-lg px-3 py-1 text-sm font-semibold ${
            isServed ? SERVED_FORMAT : PREPARING_FORMAT
            }`}
        >
            {/* Status text */}
            {isServed ? SERVED_TEXT : PREPARING_TEXT}
        </span>
    );
}
