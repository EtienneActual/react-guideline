import { useForm } from '@tanstack/react-form';
import { Button, TextField, Stack } from '@mui/material';
import { useUserStore } from '@/data/stores/user.store';
import { loginSchema } from '@/data/schemas/login.schema';

interface Props {
  onSuccess: () => void;
}

export const LoginForm = ({ onSuccess }: Props) => {
  const setUser = useUserStore((state) => state.setUser);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      setUser({
        email: value.email,
        username: value.email.split('@')[0],
      });
      onSuccess();
    },
    validators: {
      onSubmit: loginSchema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
    >
      <Stack spacing={2} sx={{ minWidth: 300, p: 2 }}>
        <form.Field
          name="email"
          children={(field) => (
            <TextField
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              label="Email"
              error={field.state.meta.errors.length > 0}
              helperText={field.state.meta.errors?.[0]}
              fullWidth
            />
          )}
        />

        <form.Field
          name="password"
          children={(field) => (
            <TextField
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              type="password"
              label="Mot de passe"
              error={field.state.meta.errors.length > 0}
              helperText={field.state.meta.errors?.[0]}
              fullWidth
            />
          )}
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" variant="contained" disabled={!canSubmit || isSubmitting} fullWidth>
              Se connecter
            </Button>
          )}
        />
      </Stack>
    </form>
  );
};
