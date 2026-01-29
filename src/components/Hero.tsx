import { motion, useScroll, useTransform } from "framer-motion";
import ButtonSocialFloat from "./ButtonSocial";
import { useRef } from "react";
import LOGO from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {  t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    // start start: khi Hero chạm top viewport
    // end start: khi Hero scroll ra khỏi viewport
  });

  // Scroll animations
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scaleAvatar = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const yAvatar = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen bg-[#0b0b10] text-white overflow-hidden"
    >
      {/* CONTENT */}
      <motion.div
        style={{
          y: yText,
          opacity: opacityText,
          scale,
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6"
      >
        <p className="text-gray-400 tracking-widest text-sm mb-4">
        {t("tagline")}
        </p>

        <h1 className="text-[72px] md:text-[96px] font-extrabold leading-none">
        {t("greeting")} <span className="text-purple-500">Hiếu (Lewis)</span>
        </h1>

        {/* Avatar */}
        <motion.div
          style={{ scale: scaleAvatar, y: yAvatar }}
          className="my-10"
        >
          <div
            className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden 
                bg-gradient-to-b from-gray-700 to-gray-900 
                flex items-center justify-center shadow-2xl"
          >
            <img src={LOGO} alt="LOGO" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <p className="text-gray-400 max-w-md mb-8">
          <span className="text-blue-500 font-semibold"></span>{" "}
          {t("experience")} ✨
        </p>

        <ButtonSocialFloat />
      </motion.div>

      {/* GLOW */}
      <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 blur-[120px]" />
      </motion.div>
    </section>
  );
};

export default Hero;
