"use client";

import OrderTable from "@/components/OrderTable";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

// 더미 주문 데이터
const mockOrders = [
  {
    id: 1,
    orderNumber: "1001",
    date: "2025-06-18",
    customer: "홍길동",
    productName: "장미",
    qty: 3,
    price: 15000,
    status: "결제완료",
  },
  {
    id: 2,
    orderNumber: "1002",
    date: "2025-06-17",
    customer: "김철수",
    productName: "튤립",
    qty: 2,
    price: 12000,
    status: "배송중",
  },
  {
    id: 3,
    orderNumber: "1003",
    date: "2025-06-16",
    customer: "박영희",
    productName: "장미",
    qty: 1,
    price: 5000,
    status: "주문취소",
  },
];


export default function HomePage() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 2.5, spacing: 16 },
    mode: "free-snap",
  });

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">대시보드</h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center min-w-[260px] max-w-xs">
            카드 위젯
          </div>
          <div className="keen-slider__slide bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center min-w-[260px] max-w-xs">
            카드 위젯 2
          </div>
          <div className="keen-slider__slide bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center min-w-[50px] max-w-xs">
            +
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-6">
        <section>
          <h2 className="text-xl font-bold mb-4">주문 관리 </h2>
          <div className="bg-white rounded-lg shadow p-6 h-64 max-w-xl ">
            <OrderTable data={mockOrders} />
          </div>
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
