import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Atropos from "atropos/react";
import "atropos/atropos.css";

const cards = [
  { title: "Card 1", color: "bg-red-400" },
  { title: "Card 2", color: "bg-teal-400" },
  { title: "Card 3", color: "bg-yellow-300 text-black" }
];

const Cards3D = (): React.ReactNode => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((f) => !f);

      setTimeout(() => {
        setIndex((i) => (i + 1) % cards.length);
      }, 400);
    }, 4000);

    return (): void => clearInterval(interval);
  }, []);

  const card = cards[index];

  return (
    <div className="perspective-[1000px] w-fit">
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-75 h-50 transform-3d"
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden">
          <Atropos className="w-full h-full">
            <div
              className={`w-full h-full rounded-2xl flex items-center justify-center text-2xl font-semibold text-white ${card.color}`}
            >
              {card.title}
            </div>
          </Atropos>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <Atropos className="w-full h-full">
            <div
              className={`w-full h-full rounded-2xl flex items-center justify-center text-2xl font-semibold text-white ${card.color}`}
            >
              {card.title}
            </div>
          </Atropos>
        </div>
      </motion.div>
    </div>
  );
};
export default Cards3D;