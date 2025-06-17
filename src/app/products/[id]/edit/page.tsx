"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getProductById, IProduct } from "@/lib/api/products";

export default function ProductEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params); // params 언래핑
    const [product, setProduct] = useState({} as IProduct);

    useEffect(() => {
        getProductById(id).then(setProduct);
    }, [id]);

    if (!product || !product.title) {
        return <div>로딩 중...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mt-8">
            <h2 className="text-xl font-bold mb-6">상품 상세</h2>
            <div className="flex items-start space-x-8">
                <img
                    className="w-40 h-40 object-cover rounded border"
                    src={product.thumbnail}
                    alt={product.title}
                />
                <div className="flex-1 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                        <input
                            className="w-full border rounded px-3 py-2"
                            type="text"
                            value={product.title}
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
                        <input
                            className="w-full border rounded px-3 py-2"
                            type="text"
                            value={product.description}
                            readOnly
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">가격</label>
                            <input
                                className="w-full border rounded px-3 py-2"
                                type="number"
                                value={product.price}
                                readOnly
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">할인가격</label>
                            <input
                                className="w-full border rounded px-3 py-2"
                                type="number"
                                value={product.salePrice ?? ""}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        {/* <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">재고</label>
                            <input
                                className="w-full border rounded px-3 py-2"
                                type="number"
                                value={product.stock}
                                readOnly
                            />
                        </div> */}
                        <div className="flex-1 flex items-center mt-6">
                            <input
                                type="checkbox"
                                checked={product.stock === 0 || product.isSoldOut}
                                onChange={(e) => { setProduct({ ...product, isSoldOut: e.target.checked }) }}
                                className="mr-2"
                                id="soldout"
                            />
                            <label htmlFor="soldout" className="text-sm font-medium text-gray-700 select-none">
                                품절
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-3 pt-6">
                        <button
                            type="button"
                            className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                        >
                            저장
                        </button>
                        <Link
                            href="/products"
                            className="px-5 py-2 rounded bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
                        >
                            취소
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}