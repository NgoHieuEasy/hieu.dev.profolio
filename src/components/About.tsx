import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Shapes
  const leftX = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const shapeOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Title
  const titleX = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Text
  const textX = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Button
  const btnY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const btnOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-[#0b0b10] text-white flex items-center justify-center overflow-hidden px-6"
    >
      {/* Shape trái */}
      <motion.div
        style={{ x: leftX, opacity: shapeOpacity }}
        className="absolute left-10 top-1/3"
      >
        <div className="w-20 h-20 bg-red-500 rounded-2xl blur-sm" />
      </motion.div>

      {/* Shape phải */}
      <motion.div
        style={{ x: rightX, opacity: shapeOpacity }}
        className="absolute right-10 top-1/4"
      >
        <div className="w-20 h-20 bg-purple-500 rounded-full blur-sm" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center">
        <motion.h2
          style={{ x: titleX, opacity: titleOpacity }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          ABOUT ME
        </motion.h2>

        <motion.p
          style={{ x: textX, opacity: textOpacity }}
          className="text-gray-400 leading-relaxed mb-8"
        >
          With over five years of experience in design, I specialize in
          branding, web design, and user experience. I love collaborating with
          businesses that want to stand out and showcase their best side.
          <br />
          <br />
          Let’s create something amazing together!
        </motion.p>

        <motion.button
          style={{ y: btnY, opacity: btnOpacity }}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
        >
          CONTACT ME
        </motion.button>
      </div>
    </section>
  );
};

export default About;
