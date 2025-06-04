import { useUser } from "@/contexts/userContext";
import { useSpotifyProfile } from "@/hooks/useSpotifyProfile";
import { Button } from "./ui/button";
import { useState } from "react";
import { useGetSpotifyTopArtists } from "@/hooks/useGetSpotifyTopArtists";

export default function MainSection() {
  const { data: profile, isLoading: isProfileLoading } = useSpotifyProfile();
  const [selectedTab, setSelectedTab] = useState<string>("artists");
  const { data: topArtists, isLoading: isLoadingTopArtists } =
    useGetSpotifyTopArtists("short_term", 10);

  if (isProfileLoading || !profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full px-5 py-2">sdadsakmsaodmosao</div>
  );
}
