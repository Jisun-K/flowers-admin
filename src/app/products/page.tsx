import { getProducts } from "@/lib/api/products";

export default async function ProductsPage() {
    const proudcts = await getProducts().then((data) => data.products);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">상품 관리</h2>
            {proudcts.map((product: any) => (
                <div
                    key={product.id}
                    className="bg-white rounded-lg shadow p-6 mb-4"
                >
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-800 font-bold mt-2">
                        ${product.price}
                    </p>
                </div>
            ))}
        </div>
    );
}