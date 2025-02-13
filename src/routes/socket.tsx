import { createFileRoute } from '@tanstack/react-router';
import SocketPage from '@/pages/Socket';

export const Route = createFileRoute('/socket')({
  component: SocketPage,
});
