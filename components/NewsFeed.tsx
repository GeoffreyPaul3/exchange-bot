'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  published_at: string;
}

export function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');
        setNews(response.data);
        setLoading(false);
      } catch {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-center">Loading news...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <div key={item.id} className="bg-gray-600 rounded p-4">
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-300 mb-2">{new Date(item.published_at).toLocaleString()}</p>
          <p className="text-sm">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}

