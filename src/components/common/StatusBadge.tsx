/* Status badge for an order item in admin order details page and user order page*/

import type { OrderItemStatus } from "../../types/orderDetails";

type StatusBadgeProps = {
  status: OrderItemStatus;
  onChange?: (status: OrderItemStatus) => void;
};

const BASE_FORMAT = "rounded-lg px-3 py-1 text-sm font-semibold";
const SERVED_FORMAT = "bg-green-100 text-green-700";
const PREPARING_FORMAT = "bg-orange-100 text-orange-600";
const SERVED_TEXT = "✔ Served";
const PREPARING_TEXT = "⏲ Preparing";
const PAID_TEXT = "$$ Paid";

export default function StatusBadge({ status, onChange }: StatusBadgeProps) {
  const isServed = status === "served";
  const statusFormat = isServed ? SERVED_FORMAT : PREPARING_FORMAT;
  const className = `${BASE_FORMAT} cursor-pointer ${statusFormat}`;

  // user page
  if (!onChange) {
    return <span className={className}>{isServed ? SERVED_TEXT : PREPARING_TEXT}</span>;
  }

  // admin page that allows update status
  return (
    <select
      value={status}
      onChange={(event) => onChange?.(event.target.value as OrderItemStatus)}
      className={className}
    >
      <option value="preparing">{PREPARING_TEXT}</option>

      <option value="served">{SERVED_TEXT}</option>

      <option value="paid">{PAID_TEXT}</option>
    </select>
  );
}
