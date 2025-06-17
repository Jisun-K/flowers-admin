import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flowers | Home"
};

export default function HomePage() {
  return (
    <div className="p-6 space-y-8  max-w-screen-xl mx-auto">
      <section>
        <h2 className="text-xl font-bold mb-4">대시보드</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center min-w-0 max-w-xl ">
            카드 위젯 1
          </div>
          <div className="bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center min-w-0 max-w-xl ">
            카드 위젯 2
          </div>

        </div>
      </section>
      <div className="grid grid-cols-2 gap-6">
        <section>
          <h2 className="text-xl font-bold mb-4">주문 관리 </h2>
          <div className="bg-white rounded-lg shadow p-6 h-64 max-w-xl ">리스트 업</div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">예약 일정</h2>
          <div className="bg-white rounded-lg shadow p-6 h-64 max-w-xl ">캘린더 들어갈곳</div>
        </section>
      </div>
    </div>
  );
}

// 캐싱 / revalidate
// await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay for demonstration
