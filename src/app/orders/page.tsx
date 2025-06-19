"use client";

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// 더미 주문 데이터
const mockOrders = [
    {
        id: 1001,
        date: "2025-06-18",
        customer: "홍길동",
        product: "장미",
        qty: 3,
        price: 15000,
        status: "결제완료",
    },
    {
        id: 1002,
        date: "2025-06-17",
        customer: "김철수",
        product: "튤립",
        qty: 2,
        price: 12000,
        status: "배송중",
    },
    {
        id: 1003,
        date: "2025-06-16",
        customer: "박영희",
        product: "장미",
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
        <div className="bg-white rounded-lg shadow p-4  max-w-screen-xl mx-auto"
            style={{ maxHeight: 320, overflowY: "auto", minHeight: 160 }}>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">주문번호</TableHead>
                        <TableHead>주문일</TableHead>
                        <TableHead>주문자</TableHead>
                        <TableHead>상품명</TableHead>
                        <TableHead>수량</TableHead>
                        <TableHead>금액</TableHead>
                        <TableHead>상태</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockOrders.map(order => (
                        <TableRow key={order.id} className="hover:bg-muted/50">
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell >{order.date}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.product}</TableCell>
                            <TableCell>{order.qty}</TableCell>
                            <TableCell className="text-right">{order.price}</TableCell>
                            <TableCell>{order.status}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    );
}