import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/data/contexts/ThemeContext';
import { Container, CssBaseline } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/components/ErrorFallback';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Header />
        <Container sx={{ mt: 4 }}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
                <Outlet />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </Container>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
