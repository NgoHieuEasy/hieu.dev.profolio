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

  return (
    <motion.section
      id="service"
      ref={ref}
      className="min-h-screen flex flex-col gap-10 lg:gap-32 p-10 lg:p-36 "
      style={{
        backgroundColor: bgColor,
        opacity,
      }}
    >
      {/* BLOCK 1 */}
      <div className="flex gap-10 ">
        <motion.h2
          style={{ opacity: opacity1, color, y: y1 }}
          className="hidden lg:flex items-center text-6xl md:text-7xl font-extrabold mb-10 "
        >
          01
        </motion.h2>

        <div>
          <motion.h3
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-3xl md:text-6xl font-extrabold mb-10"
          >
            Tradex - Centralized Exchange (CEX)
          </motion.h3>
          <motion.p
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-xl md:text-2xl leading-relaxed font-medium"
          >
            Tradex is a full-featured centralized exchange platform designed to
            deliver a seamless and secure trading experience. It supports Spot
            and Futures trading, along with comprehensive deposit and withdrawal
            systems, KYC verification, and robust account management — all built
            with performance, scalability, and user experience at its core.
          </motion.p>
        </div>
      </div>
      <motion.div
        style={{ opacity: opacity1 }}
        className="w-full h-[5px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <div className="flex gap-10 ">
        <motion.h2
          style={{ opacity: opacity1, color, y: y1 }}
          className="hidden lg:flex items-center text-6xl md:text-7xl font-extrabold mb-10 "
        >
          02
        </motion.h2>

        <div>
          <motion.h3
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-3xl md:text-6xl font-extrabold mb-10"
          >
            ApexBit - BOT TRADING
          </motion.h3>
          <motion.p
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-xl md:text-2xl leading-relaxed font-medium"
          >
            ApexBit is an automated trading bot platform that allows users to
            connect their Binance or Bitget API Keys and let the bot execute
            Futures and Spot orders based on trading signals. I served as the
            Lead Frontend throughout 8 months of development.
          </motion.p>
        </div>
      </div>
      <motion.div
        style={{ opacity: opacity1 }}
        className="w-full h-[5px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <div className="flex gap-10 ">
        <motion.h2
          style={{ opacity: opacity1, color, y: y1 }}
          className="hidden lg:flex items-center text-6xl md:text-7xl font-extrabold mb-10 "
        >
          03
        </motion.h2>

        <div>
          <motion.h3
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-3xl md:text-6xl font-extrabold mb-10"
          >
            XAI - Investment Fund
          </motion.h3>
          <motion.p
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-xl md:text-2xl leading-relaxed font-medium"
          >
            This is a profit-yielding investment platform that allows investors
            to deposit funds into multiple investment pools and earn daily
            returns based on each pool. Users log in by connecting their crypto
            wallets. I was responsible for developing all core frontend features
            during 8 months of development.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
