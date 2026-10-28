"use client";
import StatusError from "@/components/ui/StatusError";
import es from "@/messages/es.json";
import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SITE_ICONS, SITE_NAME } from "@/lib/site";
import "./globals.css";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

// global-error.tsx replaces the root layout when it fires,
// so it must include its own <html> and <body>.
export default function GlobalError({ error, reset }: Props): React.ReactNode {
  const { ERROR } = es;

  return (
    <html lang="es" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <title>{SITE_NAME}</title>
        <link rel="icon" href={SITE_ICONS.default} type="image/svg+xml" />
        <link
          rel="icon"
          href={SITE_ICONS.dark}
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={cn(
          montserrat.className,
          "antialiased flex min-h-screen flex-col text-neutral-50 bg-transparent"
        )}
      >
        <StatusError
          statusCode={500}
          message={error.message}
          onRetry={reset}
          homeHref="/es"
          copy={{
            oops: ERROR.OOPS,
            notFoundTitle: ERROR.NOT_FOUND_TITLE,
            notFoundDescription: ERROR.NOT_FOUND_DESCRIPTION,
            genericTitle: ERROR.GENERIC_TITLE,
            genericDescription: ERROR.GENERIC_DESCRIPTION,
            home: ERROR.HOME,
            retry: ERROR.RETRY,
            back: ERROR.BACK,
          }}
        />
      </body>
    </html>
  );
}
