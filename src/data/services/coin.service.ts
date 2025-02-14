import { Coin, CoinHttp } from '@/data/interfaces/coin.interface';
import { toCoin } from '@/data/dto/coin.dto';

const BASE_URL = import.meta.env.VITE_COIN_GECKO_BASE_URL;

export const getCoins = async (): Promise<Coin[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h,7d`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch coins, ${response.status}::${response.statusText}`);
    }

    const data = (await response.json()) as CoinHttp[];

    if (!Array.isArray(data)) {
      throw new Error(`Invalid response format from CoinGecko API, ${JSON.stringify(data)}`);
    }

    return data.map(toCoin);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};
