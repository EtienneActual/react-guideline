import { CoinTable } from '@components/CoinTable';

const CryptoPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-3 py-4">
        <img
          src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
          alt="CoinGecko Logo"
          className="h-8 w-auto"
        />
      </div>
      <CoinTable />
    </div>
  );
};

export default CryptoPage;
