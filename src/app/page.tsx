"use client";
import { Header } from "@/components/Header";
import MainSection from "@/components/MainSection";
import { UserContextProvider } from "@/contexts/userContext";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <div className="bg-neutral-800 h-screen text-white">
          <Header />
          <MainSection />
        </div>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
