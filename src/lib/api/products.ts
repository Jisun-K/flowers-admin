export interface IProduct {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    stock: number;
    salePrice?: number;
    isSoldOut?: boolean;
}

const API_URL = "https://dummyjson.com/products";

export async function getProductList() {
    const res = await fetch(API_URL);
    const data = await res.json();

    return data.products.map((product: IProduct) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        thumbnail: product.thumbnail,
        price: product.price,
        stock: product.stock,
        saleprice: product.salePrice ? product.salePrice : undefined,
        solisSoldOutout: product.stock === 0 ? true : false
    }));
}

export async function getProductById(id: string) {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    return data as IProduct;
}