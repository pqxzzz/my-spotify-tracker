import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAccessToken } from "@/services/getAccessToken";

// this hook is used to get the access token from the spotify API
export function useGetSpotifyAccessToken(code: string) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["spotifyAccessToken"],
    queryFn: async () => {
      const data = await getAccessToken(code);
      // Store the access token in a separate query key for easy access
      queryClient.setQueryData(["accessToken"], data.access_token);
      return data;
    }
  });
}

// New hook to access the token from anywhere
export function useAccessToken(): string | undefined {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<string>(["accessToken"]);
}
