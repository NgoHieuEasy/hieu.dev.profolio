import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const skills = [
  {
    id: 1,
    title: "Frontend",
    desc: "React, Next.js, Tailwind, MUI",
    level: 100,
  },
  {
    id: 2,
    title: "Backend",
    desc: "Node.js,Javascript, Prisma, PostgreSQL",
    level: 100,
  },
  { id: 3, title: "DevOps", desc: "CI/CD for Frontend", level: 100 },
  {
    id: 4,
    title: "Testing",
    desc: "Playwright E2E, auth flow, role-based access, UI & API testing",
    level: 100,
  },
];

export default function SkillsPage() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setShow(y > 300);
    });
  }, [scrollY]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);
  const lineScale = useTransform(scrollYProgress, [0.1, 1], [0, 1]);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-black px-4 md:px-10 pb-5"
    >
      {/* TITLE */}
      <motion.h2
        style={{ opacity: titleOpacity, y: titleY }}
        className="sticky top-20 z-20 text-center
        text-4xl md:text-7xl font-extrabold text-white uppercase"
      >
        {t("skills")}
      </motion.h2>

      {/* TIMELINE */}
      <div className="relative mt-[25vh] mx-auto max-w-5xl">
        {/* LINE */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute top-0 h-full w-[2px] origin-top bg-white/30
          left-4 md:left-1/2"
        />

        {skills.map((skill, i) => (
          <SkillItem key={skill.id} skill={skill} index={i} />
        ))}
      </div>

      {/* SCROLL TO TOP */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50
        rounded-full bg-white/10 backdrop-blur-lg p-4 text-white
        hover:scale-110 hover:bg-white/20 shadow-lg"
      >
        <ArrowUp size={22} />
      </motion.button>
    </section>
  );
}
function SkillItem({ skill, index }: { skill: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        relative mb-20 md:mb-32
        w-full md:w-[45%]
        rounded-xl bg-zinc-900 p-6 md:p-8 text-white
        ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"}
      `}
    >
      <h3 className="text-xl md:text-3xl font-bold mb-2">{skill.title}</h3>

      <p className="text-sm md:text-base text-zinc-400 mb-6">{skill.desc}</p>

      {/* PROGRESS */}
      <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-white"
        />
      </div>
    </motion.div>
  );
}
