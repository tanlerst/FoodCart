/* Status badge for an order item in admin order details page and user order page*/

import type { OrderItemStatus } from "../../types/order";

type StatusBadgeProps = {
  status: OrderItemStatus;
  onChange?: (status: OrderItemStatus) => void;
};

const BASE_FORMAT = "rounded-lg px-3 py-1 text-sm font-semibold";
const SERVED_FORMAT = "bg-green-100 text-green-700";
const PREPARING_FORMAT = "bg-orange-100 text-orange-600";
const PAID_FORMAT = "bg-slate-100 text-slate-700";
const SERVED_TEXT = "✔ Served";
const PREPARING_TEXT = "⏲ Preparing";
const PAID_TEXT = "$$ Paid";

export default function StatusBadge({ status, onChange }: StatusBadgeProps) {
  const isServed = status === "served";
  const isPaid = status === "paid";
  const statusFormat = isServed ? SERVED_FORMAT : isPaid ? PAID_FORMAT : PREPARING_FORMAT;
  const text = isServed ? SERVED_TEXT : isPaid ? PAID_TEXT : PREPARING_TEXT;
  const className = `${BASE_FORMAT} cursor-pointer ${statusFormat}`;

  if (!onChange) {
    return <span className={className}>{text}</span>;
  }

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
