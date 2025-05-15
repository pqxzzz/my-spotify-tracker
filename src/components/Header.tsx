import { useSpotifyProfile } from "@/hooks/useSpotifyProfile";

export function Header() {
  const { data: spotifyProfile } = useSpotifyProfile("");

  console.log(spotifyProfile);

  return (
    <header className="flex items-center justify-between w-full bg-neutral-700 py-5 px-5">
      <h1 className="text-white text-2xl font-bold">my stats spotify</h1>
    </header>
  );
}
