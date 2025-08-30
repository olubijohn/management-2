"use client";
import { useRouter } from "next/navigation";

export default function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-[#222] font-bold text-[18px] lg:text-[22px] mb-3"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M15 6l-6 6 6 6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {label}
    </button>
  );
}