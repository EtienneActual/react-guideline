import { createFileRoute } from '@tanstack/react-router';
import CryptoPage from '@/pages/coins-list';
export const Route = createFileRoute('/rest-api')({
  component: RestApiExample,
});

function RestApiExample() {
  return <CryptoPage />;
}
