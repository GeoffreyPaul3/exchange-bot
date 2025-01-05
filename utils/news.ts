import axios from 'axios';

export async function getLatestNews(): Promise<string> {
  try {
    // This is a placeholder. In a real-world scenario, you'd use a proper news API.
    const response = await axios.get('https://api.example.com/forex-news');
    return response.data.headline;
  } catch (error) {
    console.error('Error fetching news:', error);
    return 'Unable to fetch latest news. Stay tuned for updates!';
  }
}

