export default function ProductDetail({ id }: { id: string }) {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">상품 상세</h2>
            <div>상품 ID: {id}</div>
            <div>여기에 상품 상세 정보가 표시됩니다.</div>
        </div>
    );
}