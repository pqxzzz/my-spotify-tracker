"use client";
import { Header } from "@/components/Header";
import LoginWithSpotify from "@/components/LoginWithSpotify";
import MainSection from "@/components/MainSection";
import { UserContextProvider, useUser } from "@/contexts/userContext";
import { useAccessToken } from "@/hooks/useGetSpotifyAccessToken";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

function HomeContent() {
  const userData = useUser();
  console.log(userData);
  const accessToken = useAccessToken();
  return (
    <div className="bg-neutral-800 h-screen text-white">
      {!accessToken ? (
        <LoginWithSpotify />
      ) : (
        <div className="flex flex-col h-screen">
          <Header />
          <MainSection />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
