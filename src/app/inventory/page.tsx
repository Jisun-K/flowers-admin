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

const mockHistory = [
    { id: 1, name: "장미", date: "2025-06-17", type: "입고", qty: 10, manager: "홍길동", note: "신규입고" },
    { id: 1, name: "장미", date: "2025-06-16", type: "출고", qty: -3, manager: "김철수", note: "주문출고" },
    { id: 2, name: "튤립", date: "2025-06-15", type: "입고", qty: 8, manager: "박영희", note: "입고" },
    // 더미 데이터 추가 가능
];

export default function InventoryPage() {
    const [search, setSearch] = useState("");

    // 날짜 내림차순 정렬
    // const sorted = [...mockHistory].sort((a, b) => b.date.localeCompare(a.date));
    // // 검색어가 있으면 상품명에 해당하는 내역만 필터링
    // const filtered = search
    //     ? sorted.filter(item => item.name.includes(search))
    //     : sorted;

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">입출고 내역</h2>
            {/* <form
                className="flex items-center mb-4 gap-2"
                onSubmit={e => { e.preventDefault(); }}
            >
                <input
                    className="border rounded px-3 py-2 w-60 bg-white"
                    placeholder="상품명 검색"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                > 
                    검색
                </button>
            </form> */}
            <div
                className="bg-white rounded-lg shadow p-4  max-w-screen-xl mx-auto"
                style={{ maxHeight: 320, overflowY: "auto", minHeight: 160 }}
            >
                {/* {filtered.length === 0 ? (
                    <div className="text-gray-400 text-center py-8">입출고 내역이 없습니다.</div>
                ) : ( */}
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">날짜</TableHead>
                            <TableHead>상품명</TableHead>
                            <TableHead>구분</TableHead>
                            <TableHead>수량</TableHead>
                            <TableHead>담당자</TableHead>
                            <TableHead>비고</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockHistory.map(stock => (
                            <TableRow key={stock.id} className="hover:bg-muted/50">
                                <TableCell >{stock.date}</TableCell>
                                <TableCell>{stock.name}</TableCell>
                                <TableCell>{stock.type}</TableCell>
                                <TableCell className={`${stock.qty > 0 ? "text-blue-600" : "text-red-500"}`}>  {stock.qty > 0 ? `+${stock.qty}` : stock.qty}</TableCell>
                                <TableCell className="text-right">{stock.manager}</TableCell>
                                <TableCell>{stock.note}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
                {/* )} */}
            </div>
        </div>
    );
}

