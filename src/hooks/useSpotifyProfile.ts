import { useQuery } from "@tanstack/react-query";
import { fetchSpotifyProfile } from "@/services/spotify";
import { useAccessToken } from "./useGetSpotifyAccessToken";

export function useSpotifyProfile() {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ["spotifyProfile", accessToken],
    queryFn: () => fetchSpotifyProfile(accessToken!),
    enabled: !!accessToken,
    staleTime: 1000 * 60 * 5
  });
}
