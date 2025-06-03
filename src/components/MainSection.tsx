import { useUser } from "@/contexts/userContext";
import { useSpotifyProfile } from "@/hooks/useSpotifyProfile";
import { Button } from "./ui/button";
import { useState } from "react";
import { useGetSpotifyTopTracks } from "@/hooks/useGetSpotifyTopTracks";
import { TopTable } from "./TopTable";
import { useGetSpotifyTopArtists } from "@/hooks/useGetSpotifyTopArtists";
import { CustomPagination } from "./CustomPagination";
import timeRangeTranslation from "@/lib/helper";
import { TableSkeleton } from "./skeletons/TableSkeleton";

export default function MainSection() {
  const [timeRange, setTimeRange] = useState<string>("short_term");
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const { data: profile, isLoading: isProfileLoading } = useSpotifyProfile();
  const [selectedTab, setSelectedTab] = useState<string>("tracks");
  const { data: topTracks, isLoading: isLoadingTopTracks } =
    useGetSpotifyTopTracks(timeRange, limit, page);
  const { data: topArtists, isLoading: isLoadingTopArtists } =
    useGetSpotifyTopArtists(timeRange, limit);

  if (isProfileLoading || !profile) {
    return <TableSkeleton />;
  }

  const handleTimeRangeChange = () => {
    // TODO: mudar o jeito de trocar o time range
    if (timeRange === "short_term") {
      setTimeRange("medium_term");
    } else if (timeRange === "medium_term") {
      setTimeRange("long_term");
    } else {
      setTimeRange("short_term");
    }
    setPage(1);
  };

  return (
    <div className="flex flex-col h-full px-5 py-2">
      <div>
        <h1 className="text-lg font-semibold">
          Top tracks{" "}
          <span
            className="text-spotify-green underline"
            onClick={handleTimeRangeChange}
          >
            {timeRangeTranslation(timeRange)}
          </span>
        </h1>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        {isLoadingTopTracks && <TableSkeleton />}
        {topTracks && (
          <TopTable selectedTab={selectedTab} topTracks={topTracks} />
        )}
        <CustomPagination
          total={topTracks?.total ?? 0}
          limit={limit}
          setLimit={setLimit}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}
