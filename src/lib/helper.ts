export default function timeRangeTranslation(timeRange: string) {
  switch (timeRange) {
    case "short_term":
      return "last 4 weeks";
    case "medium_term":
      return "last 6 months";
    case "long_term":
      return "all time";
  }
}
