"use client";
import { Header } from "@/components/Header";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-neutral-800 h-screen text-white">
        <Header />
      </div>
    </QueryClientProvider>
  );
}
