import { useUser } from "@/contexts/userContext";
import { useSpotifyProfile } from "@/hooks/useSpotifyProfile";
import { Button } from "./ui/button";
import { useState } from "react";
import { useGetSpotifyTopTracks } from "@/hooks/useGetSpotifyTopTracks";
import { TopTable } from "./TopTable";
import { useGetSpotifyTopArtists } from "@/hooks/useGetSpotifyTopArtists";
import { CustomPagination } from "./CustomPagination";

export default function MainSection() {
  const [timeRange, setTimeRange] = useState<string>("short_term");
  const [limit, setLimit] = useState<number>(20);
  const { data: profile, isLoading: isProfileLoading } = useSpotifyProfile();
  const [selectedTab, setSelectedTab] = useState<string>("tracks");
  const { data: topTracks, isLoading: isLoadingTopTracks } =
    useGetSpotifyTopTracks(timeRange, limit);
  const { data: topArtists, isLoading: isLoadingTopArtists } =
    useGetSpotifyTopArtists(timeRange, limit);

  if (isProfileLoading || !profile) {
    return <div>Loading...</div>;
  }

  console.log(topArtists);

  return (
    <div className="flex flex-col h-full px-5 py-2">
      <div className="grid grid-cols-3 gap-5 mt-5">
        <Button onClick={() => setSelectedTab("tracks")}>
          <p
            className={`text-sm ${
              selectedTab === "tracks"
                ? "text-spotify-green"
                : "text-spotify-light-gray"
            }`}
          >
            Tracks
          </p>
        </Button>
        <Button onClick={() => setSelectedTab("artists")}>
          <p
            className={`text-sm ${
              selectedTab === "artists"
                ? "text-spotify-green"
                : "text-spotify-light-gray"
            }`}
          >
            Artists
          </p>
        </Button>
        <Button onClick={() => setSelectedTab("albums")}>
          <p
            className={`text-sm ${
              selectedTab === "albums"
                ? "text-spotify-green"
                : "text-spotify-light-gray"
            }`}
          >
            Albums
          </p>
        </Button>
      </div>
      <div className="mt-5">
        {topTracks && (
          <TopTable selectedTab={selectedTab} topTracks={topTracks} />
        )}
        <CustomPagination
          total={topTracks?.total ?? 0}
          limit={limit}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
}
