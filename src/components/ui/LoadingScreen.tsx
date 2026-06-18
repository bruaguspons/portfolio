"use client";

import { useEffect, useRef } from "react";
import { SITE_URL } from "@/lib/site";

const FADE_DELAY_MS = 1200;
const FADE_DURATION_MS = 600;

const LoadingScreen = (): React.ReactNode => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = setTimeout(() => {
      if (el) el.style.display = "none";
    }, FADE_DELAY_MS + FADE_DURATION_MS);
    return (): void => clearTimeout(id);
  }, []);

  return (
    <div
      ref={ref}
      className="loading-screen fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundImage: `url('${SITE_URL}noisy.webp'), radial-gradient(ellipse 90% 65% at 50% 50%, #0d2535 0%, #030b10 68%)` }}
    >
      <div className="loading-spinner" />
    </div>
  );
};

export default LoadingScreen;
