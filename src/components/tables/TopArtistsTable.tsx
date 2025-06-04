import { SpotifyTopArtistsResponse } from "@/hooks/useGetSpotifyTopArtists";
import Image from "next/image";

export function TopArtistsTable({
  topArtists
}: {
  topArtists: SpotifyTopArtistsResponse;
}) {
  console.log(topArtists.items);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {topArtists.items.map((artist) => (
        <div
          key={artist.id}
          className="max-w-[352px] h-[388px] bg-spotify-dark-gray rounded-lg p-4 flex flex-col items-center justify-between"
        >
          <Image
            src={
              artist.images[0].url ??
              artist.images[1].url ??
              artist.images[2].url ??
              ""
            }
            alt={artist.name}
            width={320}
            height={320}
            className="max-w-[320px] max-h-[320px]"
          />
          <h1 className="text-white text-lg font-medium mt-2">
            <span className="font-bold text-spotify-green">
              #{topArtists.items.indexOf(artist) + 1}
            </span>{" "}
            {artist.name}
          </h1>
        </div>
      ))}
    </div>
  );
}
