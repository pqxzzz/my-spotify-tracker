import axios from "axios";

export async function getOpenRouterResponse(prompt: string) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "meta-llama/llama-3.3-8b-instruct:free",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "X-Title": "OpenRouter Spotify Roast"
      }
    }
  );

  return response.data;
}
