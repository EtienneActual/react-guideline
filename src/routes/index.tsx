import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-xs">
        <h1 className="mb-4 text-xl font-bold text-center text-gray-800">Home</h1>
      </div>
    </div>
  );
}
