import { getTopArtists } from "@/services/spotify";
import { useAccessToken } from "./useGetSpotifyAccessToken";
import { useQuery } from "@tanstack/react-query";

export type SpotifyArtist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type SpotifyTopArtistsResponse = {
  items: SpotifyArtist[];
  total: number;
  limit: number;
  offset: number;
  previous: string | null;
};

export function useGetSpotifyTopArtists(
  timeRange: string = "short_term",
  limit: number = 10
) {
  const accessToken = useAccessToken();

  if (!accessToken) {
    return { data: null, isLoading: false, error: null };
  }

  return useQuery<SpotifyTopArtistsResponse>({
    queryKey: ["spotifyTopArtists", timeRange, limit],
    queryFn: () => getTopArtists(accessToken, timeRange, limit)
  });
}
