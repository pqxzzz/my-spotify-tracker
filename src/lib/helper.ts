export function timeRangeTranslation(timeRange: string) {
  switch (timeRange) {
    case "short_term":
      return "last 4 weeks";
    case "medium_term":
      return "last 6 months";
    case "long_term":
      return "all time";
  }
}

type SpotifyItem = {
  name: string;
  artists: { name: string }[];
};

export function extractTop10Tracks(items: SpotifyItem[]): string {
  return items
    .map((item, index) => {
      const trackName = item.name;
      const artistName = item.artists[0]?.name || "Unknown Artist";
      return `Top${index + 1}: song: "${trackName}" artist: ${artistName}`;
    })
    .join("\n");
}
