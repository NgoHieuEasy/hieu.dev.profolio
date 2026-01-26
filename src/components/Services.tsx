import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Lấy tiến trình scroll của section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // opacity từ mờ -> rõ
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  const bgColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(242,242,242)", "rgb(167, 161, 161)"],
  );

  // màu chữ từ xám -> đen
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(160,160,160)", "rgb(20,20,20)"],
  );

  const y1 = useTransform(scrollYProgress, [0.1, 0.3], [40, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const y2 = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const y3 = useTransform(scrollYProgress, [0.5, 0.7], [40, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <motion.section
      id="service"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center gap-32"
      style={{
        backgroundColor: bgColor,
        opacity,
      }}
    >
      {/* BLOCK 1 */}
      <div className="max-w-4xl text-center">
        <motion.h2
          style={{ opacity: opacity1, color, y: y1 }}
          className="text-6xl md:text-7xl font-extrabold mb-10"
        >
          SERVICES
        </motion.h2>

        <motion.p
          style={{ opacity: opacity1, color, y: y1 }}
          className="text-xl md:text-2xl leading-relaxed font-medium"
        >
          Creation of detailed objects, characters, or environments tailored to
          specific client needs. Ideal for games, products, and visualizations.
        </motion.p>
      </div>

      {/* BLOCK 2 */}
      <div className="max-w-4xl text-center">
        <motion.h2
          style={{ opacity: opacity2, color, y: y2 }}
          className="text-6xl md:text-7xl font-extrabold mb-10"
        >
          SERVICES
        </motion.h2>

        <motion.p
          style={{ opacity: opacity2, color, y: y2 }}
          className="text-xl md:text-2xl leading-relaxed font-medium"
        >
          Creation of detailed objects, characters, or environments tailored to
          specific client needs. Ideal for games, products, and visualizations.
        </motion.p>
      </div>

      {/* BLOCK 3 */}
      <div className="max-w-4xl text-center">
        <motion.h2
          style={{ opacity: opacity3, color, y: y3 }}
          className="text-6xl md:text-7xl font-extrabold mb-10"
        >
          SERVICES
        </motion.h2>

        <motion.p
          style={{ opacity: opacity3, color, y: y3 }}
          className="text-xl md:text-2xl leading-relaxed font-medium"
        >
          Creation of detailed objects, characters, or environments tailored to
          specific client needs. Ideal for games, products, and visualizations.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Services;
