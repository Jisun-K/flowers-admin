import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";


export const metadata: Metadata = {
  title: "flowers |"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1 min-h-0 overflow-hidden">
            <Sidebar />
            <main className="flex-1 min-h-0 overflow-y-auto p-6 bg-gray-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
