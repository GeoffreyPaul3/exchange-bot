import { NextRequest, NextResponse } from 'next/server';
import { TwitterApi } from 'twitter-api-v2';
import { getExchangeRates, formatTweet } from '@/utils/exchangeRate';
import { getLatestNews } from '@/utils/news';

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY!,
  appSecret: process.env.TWITTER_API_SECRET!,
  accessToken: process.env.TWITTER_ACCESS_TOKEN!,
  accessSecret: process.env.TWITTER_ACCESS_SECRET!,
});

export async function GET(request: NextRequest) {
  const tweetType = request.nextUrl.searchParams.get('type') || 'rates';

  try {
    let tweet: string;

    switch (tweetType) {
      case 'rates':
        const rates = await getExchangeRates();
        tweet = formatTweet(rates);
        break;
      case 'news':
        const news = await getLatestNews();
        tweet = `📰 Latest Forex News:\n\n${news}\n\n#ForexNews #MalawiKwacha`;
        break;
      default:
        return NextResponse.json({ error: 'Invalid tweet type' }, { status: 400 });
    }

    await twitterClient.v2.tweet(tweet);
    
    return NextResponse.json({ success: true, message: 'Tweet posted successfully' });
  } catch (error) {
    console.error('Error in cron job:', error);
    return NextResponse.json({ success: false, message: 'Failed to post tweet' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  return GET(request);
}

