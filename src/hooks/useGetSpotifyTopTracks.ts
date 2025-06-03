import { getTopTracks } from "@/services/spotify";
import { useAccessToken } from "./useGetSpotifyAccessToken";
import { useQuery } from "@tanstack/react-query";

export type SpotifyTrack = {
  album: {
    album_type: string;
    artists: {
      external_urls: { spotify: string };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: {
    external_urls: { spotify: string };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: { spotify: string };
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};

export type SpotifyTopTracksResponse = {
  items: SpotifyTrack[];
  total: number;
  limit: number;
  offset: number;
  previous: string | null;
};

export function useGetSpotifyTopTracks(
  timeRange: string = "short_term",
  limit: number = 10
) {
  const accessToken = useAccessToken();

  if (!accessToken) {
    return { data: null, isLoading: false, error: null };
  }

  return useQuery<SpotifyTopTracksResponse>({
    queryKey: ["spotifyTopTracks", timeRange, limit],
    queryFn: () => getTopTracks(accessToken, timeRange, limit)
  });
}
