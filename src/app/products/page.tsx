import ProductList from "@/components/product-list";
import { getProductList, IProduct } from "@/lib/api/products";

export default async function ProductsPage() {
    const proudcts = await getProductList();

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">상품 관리</h2>
            {proudcts.map((product: IProduct) => (
                <ProductList key={product.id} product={product} />
            ))}
        </div>
    );
}