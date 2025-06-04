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
  return (
    <div>
      <Table>
        <TableBody className="text-white">
          {topTracks.items.map((track) => (
            <div key={track.id}>
              <TableRow className="px-4 hidden lg:flex items-center justify-start hover:bg-spotify-black/50">
                <TableCell className="w-10 h-10 flex items-center justify-center">
                  <p className="text-lg font-bold text-spotify-green w-full">
                    #{topTracks.items.indexOf(track) + 1}
                  </p>
                </TableCell>
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
                <TableCell className="font-medium text-lg flex gap-5 justify-between w-full">
                  <div className="flex flex-col w-full">
                    <p className="text-lg font-semibold">{track.name}</p>
                    <p className="text-sm text-spotify-light-gray">
                      {track.artists[0].name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 w-full justify-center">
                    <p className="text-sm">{track.album.name}</p>
                  </div>
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
