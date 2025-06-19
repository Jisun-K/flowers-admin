"use client";

import { useState } from "react";

import OrderTable from "@/components/OrderTable";


// 더미 주문 데이터
const mockOrders = [
    {
        id: 1,
        orderNumber: "1001",
        date: "2025-06-18",
        customer: "홍길동",
        productName: "장미",
        qty: 3,
        price: 15000,
        status: "결제완료",
    },
    {
        id: 2,
        orderNumber: "1002",
        date: "2025-06-17",
        customer: "김철수",
        productName: "튤립",
        qty: 2,
        price: 12000,
        status: "배송중",
    },
    {
        id: 3,
        orderNumber: "1003",
        date: "2025-06-16",
        customer: "박영희",
        productName: "장미",
        qty: 1,
        price: 5000,
        status: "주문취소",
    },
];


export default function OrdersPage() {
    const [search, setSearch] = useState("");

    // const filtered = search
    //     ? mockOrders.filter(
    //         o =>
    //             o.customer.includes(search) ||
    //             o.product.includes(search) ||
    //             o.id.toString().includes(search)
    //     )
    //     : mockOrders;

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">상품 관리</h2>
            <div className="bg-white rounded-lg shadow p-4  max-w-screen-xl mx-auto"
                style={{ maxHeight: 320, overflowY: "auto", minHeight: 160 }}>
                <OrderTable data={mockOrders} />

            </div>
        </div>

    );
}