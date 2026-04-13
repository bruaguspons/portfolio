"use client";
import TextColor from "@/components/ui/TextColor";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  { text: "Developer", className: "from-blue-500 to-cyan-400" },
  { text: "Engineer", className: "from-purple-500 to-pink-500" },
];

const FlipTitle = (): React.ReactNode => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);

    return (): void => clearInterval(interval);
  }, []);

  const current = words[index];

  return (
    <LazyMotion features={domAnimation}>
      <h1 className="font-extrabold text-5xl md:text-7xl leading-none tracking-[-.08em] text-center sm:text-start">
        Software<br />
        <span className="inline-block perspective-[1000px]">
          <AnimatePresence mode="wait">
            <m.span
              key={current.text}
              initial={shouldReduceMotion ? { opacity: 0 } : { rotateX: 90, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { rotateX: 0, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { rotateX: -90, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              style={{ transformOrigin: "50% 50%" }}
              className="inline-block"
            >
              <TextColor className={current.className}>
                {current.text}
              </TextColor>
            </m.span>
          </AnimatePresence>
        </span>
      </h1>
    </LazyMotion>
  );
};

export default FlipTitle;
