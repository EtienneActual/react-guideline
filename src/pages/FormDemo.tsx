import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Alert,
} from '@mui/material';
import { useForm } from '@tanstack/react-form';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface CandidateForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  availability: Dayjs | null;
  preferredSector: string;
  mobilityRadius: number;
  country: string;
  city: string;
}

const candidateSchema = z.object({
  firstName: z.string().min(1, 'Le prénom est requis').min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(1, 'Le nom est requis').min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().min(1, "L'email est requis").email("Format d'email invalide"),
  phone: z
    .string()
    .min(1, 'Le téléphone est requis')
    .regex(/^[0-9]{10}$/, 'Le numéro de téléphone doit contenir 10 chiffres'),
  preferredSector: z.string().min(1, 'Veuillez sélectionner un secteur'),
  mobilityRadius: z.number().min(1, 'Le rayon doit être positif').max(200, 'Le rayon ne peut pas dépasser 200km'),
  experience: z.string().min(1, "L'expérience est requise"),
  availability: z.custom<Dayjs>((val: Dayjs) => val instanceof dayjs, 'La date est requise'),
  country: z.string().min(1, 'Le pays est requis'),
  city: z.string().min(1, 'La ville est requise'),
});

// Simulation d'un appel API
const submitCandidate = async (data: CandidateForm) => {
  // Simule un délai réseau
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (data.email.includes('error')) {
    throw new Error("Erreur lors de l'envoi du formulaire");
  }

  return { success: true, data };
};

const sectors = [
  'Bâtiment',
  'Logistique',
  'Industrie',
  'Transport',
  'Grande Distribution',
  'Restauration',
  'Nettoyage',
  'Agriculture',
];

const countries = ['France', 'Belgique', 'Suisse', 'Luxembourg'];

const FormDemo = () => {
  const form = useForm<CandidateForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      availability: null,
      preferredSector: '',
      mobilityRadius: 0,
      country: '',
      city: '',
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value);
    },
    validators: {
      onSubmit: candidateSchema,
    },
  });

  const mutation = useMutation({
    mutationFn: submitCandidate,
    onSuccess: (data) => {
      console.log('onSuccess:', data);
      form.reset();
    },
    onError: (error) => {
      console.error('onError:', error);
    },
  });

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Inscription Intérimaire
      </Typography>

      {mutation.isSuccess && <Alert sx={{ mb: 2 }}>Formulaire envoyé succès</Alert>}
      {mutation.isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Erreur lors de l'envoi du formulaire
        </Alert>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        noValidate
      >
        <Box sx={{ display: 'grid', gap: 3 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <form.Field name="firstName">
              {(field) => (
                <TextField
                  label="Prénom"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.errors.length > 0}
                  helperText={field.state.meta.errors[0]}
                  required
                  fullWidth
                />
              )}
            </form.Field>

            <form.Field name="lastName">
              {(field) => (
                <TextField
                  label="Nom"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.errors.length > 0}
                  helperText={field.state.meta.errors[0]}
                  required
                  fullWidth
                />
              )}
            </form.Field>
          </Box>

          <form.Field name="email">
            {(field) => (
              <TextField
                label="Email"
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                error={field.state.meta.errors.length > 0}
                helperText={field.state.meta.errors[0]}
                required
                fullWidth
              />
            )}
          </form.Field>

          <form.Field name="phone">
            {(field) => (
              <TextField
                label="Téléphone"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                error={field.state.meta.errors.length > 0}
                helperText={field.state.meta.errors[0]}
                required
                fullWidth
              />
            )}
          </form.Field>

          <form.Field name="preferredSector">
            {(field) => (
              <FormControl fullWidth error={field.state.meta.errors.length > 0}>
                <InputLabel>Secteur préféré</InputLabel>
                <Select
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  label="Secteur préféré"
                >
                  {sectors.map((sector) => (
                    <MenuItem key={sector} value={sector}>
                      {sector}
                    </MenuItem>
                  ))}
                </Select>
                {field.state.meta.errors.length > 0 && <FormHelperText>{field.state.meta.errors[0]}</FormHelperText>}
              </FormControl>
            )}
          </form.Field>

          <form.Field name="mobilityRadius">
            {(field) => (
              <TextField
                label="Rayon de mobilité (km)"
                type="number"
                value={field.state.value}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                onBlur={field.handleBlur}
                error={field.state.meta.errors.length > 0}
                helperText={field.state.meta.errors[0]}
                fullWidth
              />
            )}
          </form.Field>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <form.Field
              name="country"
              listeners={{
                onChange: () => {
                  form.setFieldValue('city', '');
                },
              }}
            >
              {(field) => (
                <FormControl fullWidth error={field.state.meta.errors.length > 0}>
                  <InputLabel>Pays</InputLabel>
                  <Select
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    label="Pays"
                    required
                  >
                    {countries.map((country) => (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                  {field.state.meta.errors.length > 0 && <FormHelperText>{field.state.meta.errors[0]}</FormHelperText>}
                </FormControl>
              )}
            </form.Field>

            <form.Field name="city">
              {(field) => (
                <TextField
                  label="Ville"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={field.state.meta.errors.length > 0}
                  helperText={field.state.meta.errors[0]}
                  required
                  fullWidth
                />
              )}
            </form.Field>
          </Box>

          <form.Field name="experience">
            {(field) => (
              <TextField
                label="Expérience professionnelle"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                error={field.state.meta.errors.length > 0}
                helperText={field.state.meta.errors[0]}
                multiline
                rows={3}
                fullWidth
              />
            )}
          </form.Field>

          <form.Field name="availability">
            {(field) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Disponibilités"
                  value={field.state.value}
                  onChange={(date) => field.handleChange(date)}
                  slotProps={{
                    textField: {
                      error: field.state.meta.errors.length > 0,
                      helperText: field.state.meta.errors[0],
                    },
                  }}
                />
              </LocalizationProvider>
            )}
          </form.Field>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={mutation.isPending || !form.state.isValid}
            sx={{ mt: 2 }}
          >
            {mutation.isPending ? 'Envoi en cours...' : 'Envoyer ma candidature'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormDemo;
