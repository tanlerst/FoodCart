import type { adminOrderItems, adminOrders } from "../../types/adminOrder";

function getOrderStatus(statusIds: number[]): number {
  if (statusIds.includes(1)) return 1;
  if (statusIds.every((item) => item === 3)) return 3;
  return 2;
}

function calculateTotal(subtotal: number): number {
  return subtotal + subtotal * 0.09 + subtotal * 0.1;
}

export function formatOrdersAdmin(rows: adminOrderItems[]): adminOrders[] {
  const grouped = new Map<number, adminOrders>();
  for (const row of rows) {
    if (!grouped.has(row.userId)) {
      grouped.set(row.userId, {
        userId: row.userId,
        username: row.username,
        orderTime: row.orderTime,
        itemQty: 0,
        price: 0,
        items: [],
        status: row.status,
      });
    }

    const order = grouped.get(row.userId)!;
    order.itemQty += row.itemQty;
    order.price += row.price * row.itemQty;
    order.items.push(row.id);

    if (new Date(row.orderTime) < new Date(order.orderTime)) {
      order.orderTime = row.orderTime;
    }
  }

  for (const order of grouped.values()) {
    const statuses = rows.filter((row) => row.userId === order.userId).map((row) => row.status);
    order.status = getOrderStatus(statuses);
    order.price = calculateTotal(order.price);
  }

  return [...grouped.values()];
}
