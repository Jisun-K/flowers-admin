"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

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
