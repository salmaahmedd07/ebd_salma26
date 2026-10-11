import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Load all orders
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Filter paid orders from Mansoura
export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Mansoura" && order.status === "paid"
  );
}

// 3. Calculate total revenue
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

// 4. Describe an order
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

// 5. Convert orders to JSON
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(order => ({
      item: order.item,
      price: order.price
    }))
  );
}