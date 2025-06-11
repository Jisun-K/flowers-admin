"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    const navItem =
        "block py-2 px-4 rounded-lg hover:bg-gray-200 font-medium transition-colors";

    const routes = [
        { href: "/", label: "대시보드" },
        { href: "/orders", label: "주문관리" },
        { href: "/inventory", label: "재고관리" },
        { href: "/products", label: "상품관리" },
        { href: "/setting", label: "설정" },
    ];

    return (
        <aside className="w-64 bg-gray-50 p-4">
            <nav className="space-y-2">
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={`${navItem} ${pathname === route.href ? "bg-gray-200" : ""
                            }`}
                    >
                        {route.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
