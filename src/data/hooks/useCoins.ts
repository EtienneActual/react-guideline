import { useQuery } from '@tanstack/react-query';
import { getCoins } from '@services/coin.service';
import { CoinHttp } from '@interfaces/coin.interface';
export const useCoins = () => {
  return useQuery<CoinHttp[]>({
    queryKey: ['coins'],
    queryFn: getCoins,
    refetchInterval: 30000, // Rafraîchir toutes les 30 secondes
    staleTime: 10000, // Considérer les données comme périmées après 10 secondes
  });
};
