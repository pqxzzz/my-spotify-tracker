import { SpotifyTopTracksResponse } from "@/hooks/useGetSpotifyTopTracks";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "./ui/table";
import Image from "next/image";

export function TopTable({
  selectedTab,
  topTracks
}: {
  selectedTab: string;
  topTracks: SpotifyTopTracksResponse;
}) {
  console.log(topTracks);
  return (
    <div>
      <Table>
        <TableBody className="text-white">
          {topTracks.items.map((track) => (
            <div key={track.id}>
              <TableRow className="py-2 px-4 hidden lg:flex">
                <TableCell>
                  <Image
                    src={
                      track.album.images[2].url ??
                      track.album.images[1].url ??
                      track.album.images[0].url ??
                      ""
                    }
                    alt={track.name}
                    width={40}
                    height={40}
                  />
                </TableCell>
                <TableCell className="font-medium">{track.name}</TableCell>
                <TableCell>{track.artists[0].name}</TableCell>
                <TableCell className="hidden lg:flex">
                  {track.album.name}
                </TableCell>
              </TableRow>
              <TableRow className="px-4 flex lg:hidden">
                <TableCell>
                  <Image
                    src={
                      track.album.images[2].url ??
                      track.album.images[1].url ??
                      track.album.images[0].url ??
                      ""
                    }
                    alt={track.name}
                    width={40}
                    height={40}
                  />
                </TableCell>
                <TableCell className="font-medium flex flex-col gap-1">
                  <p className="text-sm font-semibold">{track.name}</p>
                  <p className="text-xs text-spotify-light-gray">
                    {track.artists[0].name}
                  </p>
                </TableCell>
              </TableRow>
            </div>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
