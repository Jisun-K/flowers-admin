// components/tables/BaseTable.tsx
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";

export interface Column<T> {
    label: string;
    accessor: keyof T;
    render?: (value: any, row: T) => React.ReactNode; // optional custom render
    className?: string;
}

interface BaseTableProps<T> {
    columns: Column<T>[];
    data: T[];
}

export default function BaseTable<T>({ columns, data }: BaseTableProps<T>) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="no-hover">
                    {columns.map((column) => (
                        <TableHead key={String(column.accessor)} className={column.className}>
                            {column.label}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((row, i) => (
                    <TableRow key={i}>
                        {columns.map((column) => (
                            <TableCell key={String(column.accessor)} className={column.className}>
                                {column.render
                                    ? column.render(row[column.accessor], row)
                                    : String(row[column.accessor])}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
