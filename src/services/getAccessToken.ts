import axios from "axios";

// this function is used to get the access token from the spotify API
export async function getAccessToken(code: string) {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Spotify client ID or client secret is not defined");
  }

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    {
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://localhost:3000/callback"
    },
    {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(clientId + ":" + clientSecret).toString("base64")
      }
    }
  );

  return response.data;
}
