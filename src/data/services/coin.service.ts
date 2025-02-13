import { Coin } from '@/data/interfaces/coin.interface';
import { toCoin } from '@/data/dto/coin.dto';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCoins = async (): Promise<Coin[]> => {
  const response = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h,7d`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coins');
  }

  const data = await response.json();

  return data.map(toCoin);
};
