import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">🌸 꽃집 관리자</Link>
            <button type="button">로그아웃</button>
        </header>
    );
}