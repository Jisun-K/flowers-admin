import { getProductById } from "@/lib/api/products";
import Link from "next/link";

export default async function ProductDetail({ params }: { params: { id: string } }) {
    const product = await getProductById(params.id);

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
                        <span className="block text-sm font-medium text-gray-700 mb-1">이름</span>
                        <div className="text-lg font-semibold">{product.title}</div>
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-1">설명</span>
                        <div className="text-gray-800">{product.description}</div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <span className="block text-sm font-medium text-gray-700 mb-1">가격</span>
                            <div className="text-gray-800">{product.price}원</div>
                        </div>
                        <div className="flex-1">
                            <span className="block text-sm font-medium text-gray-700 mb-1">할인가격</span>
                            <div className="text-gray-800">{product.salePrice ?? "-"}</div>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="flex-1">
                            <span className="block text-sm font-medium text-gray-700 mb-1">재고</span>
                            <div className="text-gray-800">{product.stock}</div>
                        </div>
                        <div className="flex-1 flex items-center mt-6">
                            <span className="block text-sm font-medium text-gray-700 mb-1">품절</span>
                            <span className="ml-2">{product.isSoldOut || product.stock === 0 ? "✅" : "❌"}</span>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-3 pt-6">
                        <Link
                            href="/products"
                            className="px-5 py-2 rounded bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
                        >
                            목록으로
                        </Link>
                        <Link
                            href={`/products/${product.id}/edit`}
                            className="px-5 py-2 rounded bg-red-400 text-white font-semibold hover:bg-gray-300 transition"
                        >
                            수정하기
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}