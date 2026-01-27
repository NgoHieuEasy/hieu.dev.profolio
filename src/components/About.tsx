import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonSocialFloat from "./ButtonSocial";

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
      className="relative min-h-[calc(100vh-200px)] bg-[#0b0b10] text-white flex items-center justify-center overflow-hidden px-6"
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
          className="text-gray-400 text-[18px] leading-relaxed mb-8"
        >
          I am a web developer with a solid background in Information
          Technology, graduating with a major in IT. I earned an Excellent-level
          Scientific Research Certificate at the university level, demonstrating
          strong logical thinking, analytical ability, and deep research
          skills.With hands-on experience in large-scale projects involving
          ReactJS,NextJS, Blockchain, E-commerce, and Web3, I am confident in
          building products with high practicality and commercial value.
          <br />
          <br />I build amazing things on my own.
        </motion.p>

        <motion.button style={{ y: btnY, opacity: btnOpacity }}>
          <ButtonSocialFloat />
        </motion.button>
      </div>
    </section>
  );
};

export default About;
