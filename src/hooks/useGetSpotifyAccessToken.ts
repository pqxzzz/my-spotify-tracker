import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAccessToken } from "@/services/getAccessToken";

// this hook is used to get the access token from the spotify API
export function useGetSpotifyAccessToken(code: string) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["spotifyAccessToken"],
    queryFn: async () => {
      const data = await getAccessToken(code);
      // Store the access token in localStorage
      localStorage.setItem("spotifyAccessToken", data.access_token);
      // Also store in React Query cache for immediate access
      queryClient.setQueryData(["accessToken"], data.access_token);
      return data;
    }
  });
}

// Hook to access the token from anywhere
export function useAccessToken(): string | undefined {
  const queryClient = useQueryClient();

  // First try to get from React Query cache
  const cachedToken = queryClient.getQueryData<string>(["accessToken"]);
  if (cachedToken) return cachedToken;

  // If not in cache, try to get from localStorage
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("spotifyAccessToken");
    if (token) {
      // Update React Query cache with the token from localStorage
      queryClient.setQueryData(["accessToken"], token);
      return token;
    }
  }

  // If no token is found, clear any stale data in the cache
  queryClient.clear();
  return undefined;
}
