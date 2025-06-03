import axios from "axios";

export async function fetchSpotifyProfile(accessToken: string) {
  const response = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  console.log(response.data);
  return response.data;
}
