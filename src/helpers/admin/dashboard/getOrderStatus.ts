import type { AdminOrderStatus } from "../../../types/adminDashboard";
import { supabase } from "../../../utils/supabase";

type OrderRow = {
  orderNumber: string;
  status: number;
};

const SERVED = 3;
const PAID = 4;

export async function getOrderStatus(): Promise<AdminOrderStatus[]> {
  const { data, error } = await supabase.from("orders").select("orderNumber,status");

  if (error) throw error;

  const orders = (data ?? []) as OrderRow[];
  const orderMap = new Map<string, OrderRow[]>();

  for (const row of orders) {
    const existing = orderMap.get(row.orderNumber) ?? [];
    existing.push(row);
    orderMap.set(row.orderNumber, existing);
  }

  let preparing = 0;
  let serving = 0;
  let served = 0;

  for (const items of orderMap.values()) {
    const allPaid = items.every((item) => item.status === PAID);
    const allServed = items.every((item) => item.status === SERVED);
    const someServed = items.some((item) => item.status === SERVED);
    if (allPaid) {
      continue;
    }

    if (allServed) {
      served++;
    } else if (someServed) {
      serving++;
    } else {
      preparing++;
    }
  }

  const totalActive = preparing + serving + served;

  return [
    {
      id: "preparing",
      label: "Preparing",
      count: preparing,
      percentage: totalActive === 0 ? 0 : Math.round((preparing / totalActive) * 100),
    },
    {
      id: "serving",
      label: "Serving",
      count: serving,
      percentage: totalActive === 0 ? 0 : Math.round((serving / totalActive) * 100),
    },
    {
      id: "served",
      label: "Served",
      count: served,
      percentage: totalActive === 0 ? 0 : Math.round((served / totalActive) * 100),
    },
  ];
}
