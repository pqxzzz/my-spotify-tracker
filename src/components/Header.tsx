"use client";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between w-full bg-spotify-dark-gray py-5 px-5 lg:px-64">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <h1 className="transition-all duration-300 hover:text-spotify-green text-white text-2xl font-bold">
          my stats spotify
        </h1>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <MenuIcon className="size-5 text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-spotify-dark-gray flex flex-col gap-2">
          <DropdownMenuItem>
            <button
              className="w-full h-full cursor-pointer"
              onClick={() => {
                router.push("/tracks");
              }}
            >
              <p>Top Tracks</p>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              className="w-full h-full cursor-pointer"
              onClick={() => {
                router.push("/artists");
              }}
            >
              <p>Top Artists</p>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              className="w-full h-full cursor-pointer hover:text-orange-600"
              onClick={() => {
                router.push("/roast");
              }}
            >
              <p>Roast me</p>
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
