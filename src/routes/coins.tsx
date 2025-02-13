import { createFileRoute } from '@tanstack/react-router';
import CoinsPage from '@/pages/Coins';

export const Route = createFileRoute('/coins')({
  component: CoinsPage,
});
