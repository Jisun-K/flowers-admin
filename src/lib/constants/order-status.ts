export enum OrderStatus {
    ORDERED = "주문완료",
    PAID = "결제완료",
    PREPARING = "상품준비",
    SHIPPING = "배송중",
    COMPLETED = "배송완료",
    CANCELED = "주문취소",
}

export const ORDER_STATUS_MAP: Record<OrderStatus, { label: string; className: string }> = {
    [OrderStatus.ORDERED]: {
        label: "주문완료",
        className: "",
    },
    [OrderStatus.PAID]: {
        label: "결제완료",
        className: "",
    },
    [OrderStatus.PREPARING]: {
        label: "상품준비",
        className: "",
    },
    [OrderStatus.SHIPPING]: {
        label: "배송중",
        className: "",
    },
    [OrderStatus.COMPLETED]: {
        label: "배송완료",
        className: "text-green-600 font-semibold",
    },
    [OrderStatus.CANCELED]: {
        label: "주문취소",
        className: "text-red-500",
    },
};