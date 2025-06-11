"use client";

import Link from "next/link";
import { IProduct } from "@/lib/api/products";

export default function ProductList({ product }: { product: IProduct }) {

    return (
        <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white rounded-lg shadow p-6 mb-4 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
            <img className="w-32 h-32 object-cover rounded mb-4 border" src={product.thumbnail} alt={product.title} />
            <div>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800 font-bold mt-2">
                    ${product.price}
                </p>
            </div>

        </Link>
    );

}