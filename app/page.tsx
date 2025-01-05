import React from 'react';
import { TweetFeed } from '@/components/TweetFeed';
import { NewsFeed } from '@/components/NewsFeed';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Exchange Rate Twitter Bot</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Our Bot</h2>
          <p className="text-gray-300 max-w-2xl">
            Our Exchange Rate Twitter Bot provides real-time updates on Malawi Kwacha (MWK) exchange rates against major currencies. 
            Stay informed with our 5 daily reports and forex news updates.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest Tweets</h2>
            <div className="bg-gray-700 rounded-lg shadow-lg p-4">
              <TweetFeed />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Forex News</h2>
            <div className="bg-gray-700 rounded-lg shadow-lg p-4">
              <NewsFeed />
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          <p>&copy; 2025 Exchange Rate Twitter Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

