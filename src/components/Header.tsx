import { useUser } from "@/contexts/userContext";
import { useAccessToken } from "@/hooks/useGetSpotifyAccessToken";
import { useSpotifyProfile } from "@/hooks/useSpotifyProfile";

export function Header() {
  const accessToken = useAccessToken();
  const { data: spotifyProfile } = useSpotifyProfile(accessToken || null);

  return (
    <header className="flex items-center justify-between w-full bg-neutral-700 py-5 px-5">
      <h1 className="text-white text-2xl font-bold">
        my stats spotify - {spotifyProfile?.display_name}
      </h1>
    </header>
  );
}
