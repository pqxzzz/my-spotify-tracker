import { useQuery } from "@tanstack/react-query";
import { fetchSpotifyProfile } from "@/services/spotify";

export function useSpotifyProfile(accessToken: string) {
  return useQuery({
    queryKey: ["spotifyProfile"],
    queryFn: () => fetchSpotifyProfile(accessToken),
    staleTime: 1000 * 60 * 5 // 5 minutos
  });
}
