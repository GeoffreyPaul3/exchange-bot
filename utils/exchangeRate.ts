import axios from 'axios';

const API_KEY = process.env.EXCHANGERATE_API_KEY;
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

interface ExchangeRates {
  [key: string]: number;
}

export async function getExchangeRates(): Promise<ExchangeRates> {
  try {
    const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/MWK`);
    return response.data.conversion_rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
}

export function formatTweet(rates: ExchangeRates): string {
  const currencies = ['USD', 'EUR', 'ZAR', 'GBP'];
  const date = new Date().toISOString().split('T')[0];
  const time = new Date().toTimeString().split(' ')[0];
  
  let tweet = `📊 Malawi Kwacha (MWK) Exchange Rates - ${date} ${time}\n\n`;
  
  currencies.forEach(currency => {
    const rate = (1 / rates[currency]).toFixed(4);
    const change = (Math.random() * 0.02 - 0.01).toFixed(4); // Simulated change
    const arrow = parseFloat(change) >= 0 ? '🔼' : '🔽';
    tweet += `MWK to ${currency}: ${rate} ${arrow} ${Math.abs(parseFloat(change))}\n`;
  });
  
  tweet += '\nStay updated with our 5 daily reports! #MalawiKwacha #ExchangeRates';
  
  return tweet;
}

