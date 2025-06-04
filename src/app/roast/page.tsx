"use client";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/userContext";
import { useGetSpotifyTopTracks } from "@/hooks/useGetSpotifyTopTracks";
import { extractTop10Tracks } from "@/lib/helper";
import { getOpenRouterResponse } from "@/services/openRouter";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function RoastPage() {
  const { userFavorites, setUserFavorites } = useUser();
  const [roast, setRoast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    data: topTracks,
    isLoading: isLoadingTopTracks,
    error
  } = useGetSpotifyTopTracks("short_term", 10, 1);

  console.log("userFavorites", userFavorites);
  console.log("topTracks", topTracks);

  const handleRoastFavoriteSongs = async () => {
    if (
      !userFavorites ||
      !userFavorites.shortTermTopTracks ||
      userFavorites.shortTermTopTracks === ""
    ) {
      setIsLoading(true);

      const top10Tracks = extractTop10Tracks(topTracks?.items ?? []);
      console.log("top10Tracks", top10Tracks);
      setUserFavorites({
        shortTermTopTracks: top10Tracks
      });

      if (error) {
        console.log("error", error);
      }

      setIsLoading(false);
    }

    const response = await getOpenRouterResponse(
      `Here are my top 10 tracks that i most listened to. Roast my music taste like you’re the funniest, most unhinged friend in the group chat. Be clever, witty, judge my personality as a whole and be the meanest person in the world — no mercy, no filters: ${userFavorites?.shortTermTopTracks}
      OBS: not longer than 320 words`
    );
    console.log(response.choices[0].message.content);
    setRoast(response.choices[0].message.content);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-full px-5 py-2">
        <div className="flex gap-5 items-center justify-center mt-8">
          <Button
            className="bg-spotify-green hover:bg-spotify-green/80 text-white md:w-auto"
            onClick={handleRoastFavoriteSongs}
          >
            <p>Roast my favorite songs</p>
          </Button>
          <Button
            className="bg-spotify-black hover:bg-spotify-black/80 text-white md:w-auto"
            // onClick={handleRoastFavoriteArtists}
          >
            <p>Roast my favorite artists</p>
          </Button>
        </div>
        <div className="mt-8 flex flex-col gap-5 items-center justify-center">
          {isLoading && (
            <div className="flex items-center justify-center">
              <Loader2 className="size-4 animate-spin" />
            </div>
          )}
          {roast && !isLoading && (
            <p className="text-start text-spotify-light-gray animate-typing overflow-hidden whitespace-pre-wrap">
              {roast}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
