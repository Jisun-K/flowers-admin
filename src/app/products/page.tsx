import ProductItem from "@/components/product-item";
import { getProductList, IProduct } from "@/lib/api/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Flowers | Products"
};


export default async function ProductsPage() {
    const products = await getProductList();

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">상품 관리</h2>
            {products.map((product: IProduct) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}