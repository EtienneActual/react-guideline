import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/data/contexts/theme.context';
import { Container, CssBaseline } from '@mui/material';

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Header />
        <Container sx={{ mt: 4 }}>
          <Outlet />
        </Container>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
