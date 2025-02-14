import { Suspense, ReactNode } from 'react';
import { LoadingFallback } from './LoadingFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorFallback } from './ErrorFallback';

interface AsyncBoundaryProps {
  children: ReactNode;
  loadingFallback?: ReactNode;
}

export const AsyncBoundary = ({ children, loadingFallback = <LoadingFallback /> }: AsyncBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <Suspense fallback={loadingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
