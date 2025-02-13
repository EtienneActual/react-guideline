import { useQuery } from '@tanstack/react-query';
import { getCoins } from '@/data/services/coin.service';
import { Coin } from '@/data/interfaces/coin.interface';

export const useCoins = () => {
  return useQuery<Coin[]>({
    queryKey: ['coins'],
    queryFn: getCoins,
    refetchInterval: 30000, // Rafraîchir toutes les 30 secondes
    staleTime: 10000, // Considérer les données comme périmées après 10 secondes
  });
};
