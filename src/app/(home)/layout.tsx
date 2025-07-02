import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Flowers | Home"
};

export default function HomeLayout({ children }: { children: ReactNode }) {

    return (
        <div className="p-6 space-y-8  max-w-screen-xl mx-auto">
            {/* 공통 레이아웃 */}
            {children}
        </div>
    );
}
