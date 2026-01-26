import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "CLIENT 01",
    image: "/img1.jpg",
  },
  {
    id: 2,
    title: "CLIENT 02",
    image: "/img2.jpg",
  },
  {
    id: 3,
    title: "CLIENT 03",
    image: "/img3.jpg",
  },
];

export default function StackingCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div>
      {/* STACKING CARDS */}
      <section ref={containerRef} className="relative h-[300vh] bg-black">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </section>
    </div>
  );
}

function Card({
  card,
  index,
  progress,
}: {
  card: any;
  index: number;
  progress: any;
}) {
  const start = index * 0.33;
  const end = start + 0.33;

  const y = useTransform(progress, [start, end], [100, 0]);
  const scale = useTransform(progress, [start, end], [0.9, 1]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className="sticky top-0 h-screen flex items-center justify-center"
    >
      <div className="w-[80%] h-[70%] rounded-3xl border border-white/20 bg-zinc-900 p-8">
        <h2 className="text-white text-2xl mb-4 hover:cursor-pointer">
          {card.title}
        </h2>

        <div className="grid grid-cols-2 gap-4 h-full">
          <img
            src={card.image}
            className="rounded-xl object-cover w-full h-full"
          />
          <div className="rounded-xl bg-zinc-800" />
        </div>
      </div>
    </motion.div>
  );
}
