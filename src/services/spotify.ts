import { queryClient } from "@/lib/react-query";
import axios from "axios";

const handleSpotifyError = (error: any) => {
  if (error.response?.status === 401) {
    // Clear the token from localStorage
    localStorage.removeItem("spotifyAccessToken");
    queryClient.clear();
    // Redirect to login
    window.location.href = "/";
    throw new Error("The access token expired");
  }
  throw error;
};

export async function fetchSpotifyProfile(accessToken: string) {
  try {
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleSpotifyError(error);
  }
}

export async function getTopTracks(
  accessToken: string,
  timeRange: string = "short_term",
  limit: number = 10,
  page: number = 1
) {
  try {
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
  } catch (error) {
    handleSpotifyError(error);
  }
}

export async function getTopArtists(
  accessToken: string,
  timeRange: string = "short_term",
  limit: number = 10,
  page: number = 1
) {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${limit}&offset=${
        (page - 1) * limit
      }`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response.data;
  } catch (error) {
    handleSpotifyError(error);
  }
}

export async function getTopAlbums(
  accessToken: string,
  timeRange: string = "short_term",
  limit: number = 10
) {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/albums?time_range=${timeRange}&limit=${limit}&offset=0`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response.data;
  } catch (error) {
    handleSpotifyError(error);
  }
}
