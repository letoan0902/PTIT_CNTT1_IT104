"use strict";
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log("Sản phẩm:");
    order.items.forEach(item => {
        const amount = (item.product.price * item.quantity).toLocaleString("vi-VN");
        console.log(`- ${item.product.name} x ${item.quantity} → ${amount} VND`);
    });
    const total = calculateOrderTotal(order).toLocaleString("vi-VN");
    console.log(`Tổng cộng: ${total} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
const shirt = { id: "P001", name: "Áo sơ mi", price: 250000 };
const trousers = { id: "P002", name: "Quần tây", price: 400000 };
const order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: shirt, quantity: 2 },
        { product: trousers, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(order);
