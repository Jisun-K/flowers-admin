"use client";

import Link from "next/link";
import { IProduct } from "@/lib/api/products";

export default function ProductItem({ product }: { product: IProduct }) {
    return (
        <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-6 mb-4 px-6 py-4 border border-gray-100 hover:border-blue-200"
        >
            <img
                className="w-24 h-24 object-cover rounded-lg border border-gray-200 group-hover:scale-105 transition-transform"
                src={product.thumbnail}
                alt={product.title}
            />
            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                <p className="text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-2 mt-3">
                    <span className="text-base font-semibold text-blue-700">{product.price.toLocaleString()}원</span>
                    {product.salePrice && (
                        <span className="text-sm text-red-500 font-medium bg-red-50 rounded px-2 py-0.5 ml-2">
                            할인 {product.salePrice.toLocaleString()}원
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}