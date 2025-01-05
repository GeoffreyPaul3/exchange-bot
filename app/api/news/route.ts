import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=forex+malawi&apiKey=${process.env.NEWS_API_KEY}`
    );
    const articles = response.data.articles
      .slice(0, 5)
      .map(
        (
          article: { title: string; description: string; publishedAt: string },
          index: number
        ) => ({
          id: index.toString(),
          title: article.title,
          summary: article.description,
          published_at: article.publishedAt,
        })
      );

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
