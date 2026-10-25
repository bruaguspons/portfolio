import type { ReactNode } from "react";

// The real root layout (<html>, <body>) lives in app/[locale]/layout.tsx
// so that <html lang> matches the active locale in the static export.
export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return children;
}
