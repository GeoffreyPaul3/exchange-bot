import { NextResponse } from 'next/server';
import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY!,
  appSecret: process.env.TWITTER_API_SECRET!,
  accessToken: process.env.TWITTER_ACCESS_TOKEN!,
  accessSecret: process.env.TWITTER_ACCESS_SECRET!,
});

export async function GET() {
  try {
    const tweets = await twitterClient.v2.userTimeline(process.env.TWITTER_USER_ID!, {
      max_results: 10,
      'tweet.fields': ['created_at'],
    });

    return NextResponse.json(tweets.data);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return NextResponse.json({ error: 'Failed to fetch tweets' }, { status: 500 });
  }
}
