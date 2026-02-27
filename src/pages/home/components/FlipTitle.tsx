import TextColor from "@/components/TextColor";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const words = [
  { text: "Developer", className: "from-blue-500 to-sky-500" },
  { text: "Engineer", className: "from-purple-500 to-pink-500" },
];

const FlipTitle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const current = words[index];

  return (
    <h1 className="font-extrabold text-[clamp(3rem,6vw,10rem)] leading-none tracking-[-.08em] text-center sm:text-start">
      Software<br />
      <span className="inline-block perspective-[1000px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.text}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "50% 50%" }}
            className="inline-block"
          >
            <TextColor className={current.className}>
              {current.text}
            </TextColor>
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
export default FlipTitle