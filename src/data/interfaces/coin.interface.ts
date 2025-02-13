export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  marketCap: number;
  marketCapRank: number;
  totalVolume: number;
  priceChangePercentage24h: number | null;
  priceChangePercentage7d: number | null;
  ath: number;
  athChangePercentage: number;
  athDate: string;
  atl: number;
  atlChangePercentage: number;
  atlDate: string;
  circulatingSupply: number;
  fullyDilutedValuation: number | null;
  high24h: number | null;
  low24h: number | null;
  marketCapChange24h: number;
  marketCapChangePercentage24h: number;
  maxSupply: number | null;
  priceChange24h: number;
  priceChangePercentage7dInCurrency: number | null;
  priceChangePercentage24hInCurrency: number;
  totalSupply: number;
  lastUpdated: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
}

export interface CoinHttp {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number | null;
  price_change_percentage_7d: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  fully_diluted_valuation: number | null;
  high_24h: number | null;
  low_24h: number | null;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  max_supply: number | null;
  price_change_24h: number;
  price_change_percentage_7d_in_currency: number | null;
  price_change_percentage_24h_in_currency: number;
  total_supply: number;
  last_updated: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
}
