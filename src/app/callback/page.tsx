"use client";
import { Button } from "@/components/ui/button";
import {
  useGetSpotifyAccessToken,
  useAccessToken
} from "@/hooks/useGetSpotifyAccessToken";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Callback() {
  const params = useSearchParams();
  const code = params.get("code");

  if (!code) {
    return <div>No code found</div>;
  }

  return (
    <div>
      <CallbackContent code={code} />
    </div>
  );
}

// this page is used to get the access token after the user logs in with spotify
function CallbackContent({ code }: { code: string }) {
  const { data, isPending, error } = useGetSpotifyAccessToken(code);
  const router = useRouter();
  const accessToken = useAccessToken();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching token</div>;
  }

  return (
    <div>
      <h1>Callback</h1>
      <h2>Access Token:</h2>
      <p>{accessToken}</p>
      <p>{code}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Button onClick={() => router.push("/")}>Ir para home</Button>
    </div>
  );
}
