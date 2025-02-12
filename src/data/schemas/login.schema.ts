import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email requis').email('Format email invalide'),
  password: z.string().min(1, 'Mot de passe requis').min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});
