import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
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
    ["rgb(242,242,242)", "rgb(167, 161, 161)"]
  );

  // màu chữ từ xám -> đen
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(160,160,160)", "rgb(20,20,20)"]
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
            {t("serviceTitleOne")}
          </motion.h3>
          <motion.p
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-xl md:text-2xl leading-relaxed font-medium"
          >
            {t("serviceDesOne")}
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
            {t("serviceTitleTwo")}
          </motion.h3>
          <motion.p
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-xl md:text-2xl leading-relaxed font-medium"
          >
            {t("serviceDesTwo")}
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
            {t("serviceTitleThree")}
          </motion.h3>
          <motion.p
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-xl md:text-2xl leading-relaxed font-medium"
          >
            {t("serviceDesThree")}
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
          04
        </motion.h2>

        <div>
          <motion.h3
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-3xl md:text-6xl font-extrabold mb-10"
          >
            {t("serviceTitleFour")}
          </motion.h3>
          <motion.p
            style={{ opacity: opacity1, color, y: y1 }}
            className="text-xl md:text-2xl leading-relaxed font-medium"
          >
            {t("serviceDesFour")}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
