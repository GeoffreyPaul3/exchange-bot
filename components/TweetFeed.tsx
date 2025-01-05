'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Tweet {
  id: string;
  text: string;
  created_at: string;
}

export function TweetFeed() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('/api/tweets');
        setTweets(response.data);
        setLoading(false);
      } catch {
        setError('Failed to fetch tweets. Please try again later.');
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  if (loading) return <div className="text-center">Loading tweets...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="space-y-4">
      {tweets.map((tweet) => (
        <div key={tweet.id} className="bg-gray-600 rounded p-4">
          <p className="text-sm text-gray-300 mb-2">{new Date(tweet.created_at).toLocaleString()}</p>
          <p className="whitespace-pre-line">{tweet.text}</p>
        </div>
      ))}
    </div>
  );
}

