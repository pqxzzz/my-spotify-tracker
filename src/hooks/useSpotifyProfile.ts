import { useQuery } from "@tanstack/react-query";
import { fetchSpotifyProfile } from "@/services/spotify";

export function useSpotifyProfile(accessToken: string | null) {
  if (!accessToken) {
    return { data: null, isLoading: false, error: null };
  }

  console.log(accessToken);

  return useQuery({
    queryKey: ["spotifyProfile"],
    queryFn: () => fetchSpotifyProfile(accessToken),
    staleTime: 1000 * 60 * 5
  });
}
