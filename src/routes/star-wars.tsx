import { createFileRoute } from '@tanstack/react-router';
import StarWars from '../pages/StarWars';

export const Route = createFileRoute('/star-wars')({
  component: StarWars,
});
