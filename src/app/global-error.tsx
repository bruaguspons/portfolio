"use client";
import StatusError from "./_components/StatusError";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

// global-error.tsx replaces the root layout when it fires,
// so it must include its own <html> and <body>.
export default function GlobalError({ error, reset }: Props): React.ReactNode {
  return (
    <html className="dark scroll-smooth">
      <body className="antialiased flex min-h-screen flex-col text-neutral-50 bg-zinc-800">
        <StatusError statusCode={500} message={error.message} onRetry={reset} />
      </body>
    </html>
  );
}
