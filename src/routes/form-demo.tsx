import FormDemo from '@/pages/FormDemo';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/form-demo')({
  component: FormDemo,
});
