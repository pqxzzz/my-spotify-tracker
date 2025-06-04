"use client";

import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { useGetSpotifyTopTracks } from "@/hooks/useGetSpotifyTopTracks";
import { TopTable } from "@/components/TopTable";
import { CustomPagination } from "@/components/CustomPagination";
import { extractTop10Tracks, timeRangeTranslation } from "@/lib/helper";
import { TableSkeleton } from "@/components/skeletons/TableSkeleton";
import { useRouter } from "next/navigation";
import { getOpenRouterResponse } from "@/services/openRouter";
import { useUser } from "@/contexts/userContext";
import { ChevronRight } from "lucide-react";

export default function TracksPage() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState<string>("short_term");
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<string>("tracks");
  const {
    data: topTracks,
    isLoading: isLoadingTopTracks,
    error
  } = useGetSpotifyTopTracks(timeRange, limit, page);

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

  if (error) {
    router.push("/");
  }

  const { userFavorites, setUserFavorites } = useUser();
  const top10Tracks = extractTop10Tracks(topTracks?.items ?? []);

  useEffect(() => {
    setUserFavorites({
      shortTermTopTracks: top10Tracks
    });
  }, [top10Tracks]);

  // TODO: ver pq ta executando varias vezes
  // const handleGetOpenRouterResponse = async () => {
  //   const response = await getOpenRouterResponse(
  //     `Here are my top 10 tracks that i most listened to. Roast my music taste like you’re the funniest, most unhinged friend in the group chat. Be clever, witty, and absolutely savage — no mercy, no filters, but still make it funny, not mean-spirited: ${top10Tracks}`
  //   );
  //   console.log(response.choices[0].message.content);
  // };
  // handleGetOpenRouterResponse();

  return (
    <>
      <Header />
      <div className="lg:w-2/3 mx-auto">
        <div className="flex flex-col h-full px-5 py-2">
          <div className="py-5">
            <h1 className="text-xl lg:text-2xl font-semibold text-white">
              Top tracks{" "}
              <span
                className="text-spotify-green underline cursor-pointer"
                onClick={handleTimeRangeChange}
              >
                {timeRangeTranslation(timeRange)}
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            {isLoadingTopTracks && <TableSkeleton />}
            {topTracks && (
              <>
                <TopTable selectedTab={selectedTab} topTracks={topTracks} />
                <CustomPagination
                  total={topTracks?.total ?? 0}
                  limit={limit}
                  setLimit={setLimit}
                  setPage={setPage}
                  page={page}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
