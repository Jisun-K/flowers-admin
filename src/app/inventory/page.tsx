"use client";

import { useState } from "react";

const mockHistory = [
    { id: 1, name: "장미", date: "2025-06-17", type: "입고", qty: 10, manager: "홍길동", note: "신규입고" },
    { id: 1, name: "장미", date: "2025-06-16", type: "출고", qty: -3, manager: "김철수", note: "주문출고" },
    { id: 2, name: "튤립", date: "2025-06-15", type: "입고", qty: 8, manager: "박영희", note: "입고" },
    // 더미 데이터 추가 가능
];

export default function InventoryPage() {
    const [search, setSearch] = useState("");

    // 날짜 내림차순 정렬
    const sorted = [...mockHistory].sort((a, b) => b.date.localeCompare(a.date));
    // 검색어가 있으면 상품명에 해당하는 내역만 필터링
    const filtered = search
        ? sorted.filter(item => item.name.includes(search))
        : sorted;

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">입출고 내역</h2>
            <form
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
            </form>
            <div
                className="bg-white rounded-lg shadow p-4"
                style={{ maxHeight: 320, overflowY: "auto", minHeight: 160 }}
            >
                {filtered.length === 0 ? (
                    <div className="text-gray-400 text-center py-8">입출고 내역이 없습니다.</div>
                ) : (
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="text-gray-600 border-b">
                                <th className="py-1 px-2 text-left">날짜</th>
                                <th className="py-1 px-2 text-left">상품명</th>
                                <th className="py-1 px-2 text-left">구분</th>
                                <th className="py-1 px-2 text-right">수량</th>
                                <th className="py-1 px-2 text-left">담당자</th>
                                <th className="py-1 px-2 text-left">비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item, idx) => (
                                <tr key={idx} className="border-b last:border-b-0">
                                    <td className="py-1 px-2">{item.date}</td>
                                    <td className="py-1 px-2">{item.name}</td>
                                    <td className="py-1 px-2">{item.type}</td>
                                    <td className={`py-1 px-2 text-right font-bold ${item.qty > 0 ? "text-blue-600" : "text-red-500"}`}>
                                        {item.qty > 0 ? `+${item.qty}` : item.qty}
                                    </td>
                                    <td className="py-1 px-2">{item.manager}</td>
                                    <td className="py-1 px-2">{item.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}