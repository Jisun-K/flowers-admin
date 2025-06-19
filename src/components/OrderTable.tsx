// components/tables/OrderTable.tsx
import BaseTable, { Column } from "./BaseTable";
import { ORDER_STATUS_MAP, OrderStatus } from "@/lib/constants/order-status";

interface Order {
    id: number;
    orderNumber: string;
    date: string;
    customer: string;
    productName: string;
    qty: number;
    price: number;
    status: string;
}

const columns: Column<Order>[] = [
    { label: "주문번호", accessor: "orderNumber" },
    { label: "주문일", accessor: "date" },
    { label: "주문자", accessor: "customer" },
    { label: "상품명", accessor: "productName" },
    { label: "수량", accessor: "qty" },
    {
        label: "금액",
        accessor: "price",
        render: (value: number) => value.toLocaleString() + "원",
        className: "text-right",
    },
    {
        label: "상태",
        accessor: "status",
        render: (value: string, row: Order) => {
            const status = ORDER_STATUS_MAP[value as OrderStatus];
            return (
                <span className={status?.className ?? ""}>
                    {status?.label ?? value}
                </span>
            );
        },
    },
];

export default function OrderTable({ data }: { data: Order[] }) {
    return <BaseTable<Order> columns={columns} data={data} />;
}