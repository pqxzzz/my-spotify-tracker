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

export async function getTopTracks(
  accessToken: string,
  timeRange: string = "short_term",
  limit: number = 10,
  page: number = 1
) {
  const response = await axios.get(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=${
      (page - 1) * limit
    }`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  return response.data;
}

export async function getTopArtists(
  accessToken: string,
  timeRange: string = "short_term",
  limit: number = 10
) {
  const response = await axios.get(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${limit}&offset=0`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  return response.data;
}

export async function getTopAlbums(
  accessToken: string,
  timeRange: string = "short_term",
  limit: number = 10
) {
  const response = await axios.get(
    `https://api.spotify.com/v1/me/top/albums?time_range=${timeRange}&limit=${limit}&offset=0`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  return response.data;
}
