"use client";
import { CustomPagination } from "@/components/CustomPagination";
import { Header } from "@/components/Header";
import { TableSkeleton } from "@/components/skeletons/TableSkeleton";
import { TopArtistsTable } from "@/components/tables/TopArtistsTable";
import { useGetSpotifyTopArtists } from "@/hooks/useGetSpotifyTopArtists";
import { timeRangeTranslation } from "@/lib/helper";

import { useState } from "react";

export default function ArtistsPage() {
  const [timeRange, setTimeRange] = useState<string>("short_term");
  const [limit, setLimit] = useState<number>(9);
  const [page, setPage] = useState<number>(1);

  const { data: topArtists, isLoading: isLoadingTopArtists } =
    useGetSpotifyTopArtists(timeRange, limit, page);

  const handleTimeRangeChange = () => {
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
    <>
      <Header />
      <div className="flex flex-col h-full px-5 py-2">
        <div className="py-5">
          <h1 className="text-xl lg:text-2xl font-semibold text-white">
            Top artists{" "}
            <span
              className="text-spotify-green hover:text-spotify-green/80 underline cursor-pointer"
              onClick={handleTimeRangeChange}
            >
              {timeRangeTranslation(timeRange)}
            </span>
          </h1>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          {isLoadingTopArtists && <TableSkeleton />}
          {topArtists && <TopArtistsTable topArtists={topArtists} />}
          <CustomPagination
            total={topArtists?.total ?? 0}
            limit={limit}
            setLimit={setLimit}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </>
  );
}
