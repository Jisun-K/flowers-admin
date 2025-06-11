
export default function OrderDetail({ id }: { id: string }) {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">주문 상세</h2>
            <div>주문 ID: {id}</div>
            <div>여기에 상품 주문 정보가 표시됩니다.</div>
        </div>
    );
}