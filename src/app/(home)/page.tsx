import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

export default function HomePage() {
  return (
    <div>
      dashboard
    </div>
  );
}

// 캐싱 / revalidate
// await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay for demonstration
