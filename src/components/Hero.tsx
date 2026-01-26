import { motion, useScroll, useTransform } from "framer-motion";
import ButtonSocialFloat from "./ButtonSocial";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Text trượt lên nhẹ
  const yText = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Avatar zoom nhẹ
  const scaleAvatar = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const yAvatar = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  // Glow mờ dần
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative min-h-screen bg-[#0b0b10] text-white overflow-hidden">
      {/* Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6"
      >
        <p className="text-gray-400 tracking-widest text-sm mb-4">
          A 3D DESIGN PASSIONATE
        </p>

        <h1 className="text-[72px] md:text-[96px] font-extrabold leading-none">
          HI, I’M <span className="text-white">ALEX</span>
        </h1>

        {/* Avatar */}
        <motion.div
          style={{ scale: scaleAvatar, y: yAvatar }}
          className="my-10"
        >
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl">
            <img src="/avatar.png" alt="3D Avatar" className="w-44 md:w-56" />
          </div>
        </motion.div>

        <p className="text-gray-400 max-w-md mb-8">
          ABOUT CRAFTING BOLD AND MEMORABLE PROJECTS ✨
        </p>

        <ButtonSocialFloat />
      </motion.div>

      {/* Glow */}
      <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 blur-[120px]" />
      </motion.div>
    </section>
  );
};

export default Hero;
