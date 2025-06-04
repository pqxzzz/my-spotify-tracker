import { useSpotifyProfile } from "@/hooks/useSpotifyProfile";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MainSection() {
  const router = useRouter();
  const {
    data: profile,
    isLoading: isProfileLoading,
    error
  } = useSpotifyProfile();

  if (isProfileLoading || !profile) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col h-full px-5 py-2">
      <div className="flex flex-col items-center justify-center gap-2 mt-12">
        <Image
          src={profile.images[0].url}
          alt="Profile"
          width={100}
          height={100}
          className={`rounded-full border-2 ${
            profile.product === "premium"
              ? "border-spotify-green"
              : "border-spotify-light-gray"
          }`}
        />
        <h1 className="text-2xl font-bold">{profile.display_name}</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-8">
        <Button className="bg-spotify-green hover:bg-spotify-green/80 text-white w-full md:w-auto">
          <p>Roast me</p>
        </Button>
        <Button
          onClick={() => router.push("/tracks")}
          className=" bg-spotify-black text-white w-full md:w-auto"
        >
          <p>My top tracks</p>
        </Button>
        <Button
          onClick={() => router.push("/artists")}
          className=" bg-spotify-black text-white w-full md:w-auto"
        >
          <p>My top artists</p>
        </Button>
      </div>
    </div>
  );
}
