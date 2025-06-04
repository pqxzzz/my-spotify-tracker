import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full bg-spotify-dark-gray py-5 px-5">
      <h1 className="text-spotify-green text-2xl font-bold">
        my stats spotify
      </h1>

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <MenuIcon className="size-5 text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-spotify-dark-gray flex flex-col gap-2">
          <DropdownMenuItem>
            <button
              className="w-full h-full cursor-pointer"
              onClick={() => {
                window.location.href = "/tracks";
              }}
            >
              <p>Top Tracks</p>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              className="w-full h-full cursor-pointer"
              onClick={() => {
                window.location.href = "/artists";
              }}
            >
              <p>Top Artists</p>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              className="w-full h-full cursor-pointer"
              onClick={() => {
                window.location.href = "/albums";
              }}
            >
              <p>Top Albums</p>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              className="w-full h-full cursor-pointer"
              onClick={() => {
                localStorage.removeItem("spotifyAccessToken");
                window.location.href = "/";
              }}
            >
              <p>Logout</p>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
