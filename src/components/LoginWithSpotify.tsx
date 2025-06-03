import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function LoginWithSpotify() {
  const router = useRouter();

  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;

    if (!clientId) {
      console.error("Spotify Client ID is not defined");
      return;
    }

    // here's the URL that will redirect to callback with the code
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/callback&scope=user-read-private user-read-email user-top-read`;

    router.push(spotifyAuthUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div>
        <Button onClick={handleLogin}>Login with Spotify</Button>
      </div>
    </div>
  );
}
