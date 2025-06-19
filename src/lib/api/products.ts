export interface IProduct {
    id: number;
    productName: string;
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

    return data.products.map(normalizeProduct);
}

export async function getProductById(id: string) {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();

    return normalizeProduct(data);
}

// 공통 데이터 가공 함수
function normalizeProduct(data: any): IProduct {
    return {
        id: data.id,
        productName: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        price: data.price,
        stock: data.stock,
        salePrice: data.salePrice ? data.salePrice : undefined,
        isSoldOut: data.stock === 0 ? true : false,
    };
}
