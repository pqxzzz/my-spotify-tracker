import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full bg-spotify-dark-gray py-5 px-5">
      <h1 className="text-spotify-green text-2xl font-bold">
        my stats spotify
      </h1>
      <Button
        onClick={() => {
          localStorage.removeItem("spotifyAccessToken");
          window.location.href = "/";
        }}
      >
        Logout
      </Button>
    </header>
  );
}
