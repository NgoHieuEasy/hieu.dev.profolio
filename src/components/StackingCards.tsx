import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AICEX from "../assets/AICEX.png";
import AIBOT from "../assets/AI-BOT.png";
import XAI from "../assets/XAI.png";
import REALESTATE from "../assets/REAL-ESTATE.png";
import { useTranslation } from "react-i18next";

export default function StackingCards() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      id: 1,
      title: t("serviceTitleOne"),
      image: AICEX,
      content: <ProjectCEXCard />,
    },
    {
      id: 2,
      title: t("serviceTitleTwo"),
      image: AIBOT,
      content: <ProjectAIBOTCard />,
    },

    {
      id: 3,
      title: t("serviceTitleThree"),
      image: XAI,
      content: <ProjectXAICard />,
    },
    {
      id: 4,
      title: t("serviceTitleFour"),
      image: REALESTATE,
      content: <RealEstateCard />,
    },
  ];

  return (
    <div>
      {/* STACKING CARDS */}
      <section
        id="projects"
        ref={containerRef}
        className="relative h-[300vh] bg-black"
        style={{ height: `${cards.length * 100}vh` }}
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            progress={scrollYProgress}
            content={card.content}
          />
        ))}
      </section>
    </div>
  );
}

function Card({ card, index, progress, content }: any) {
  const step = 1 / 5; // hoặc truyền cards.length vào
  const start = index * step;
  const end = start + step;

  const y = useTransform(progress, [start, end], [100, 0]);
  const scale = useTransform(progress, [start, end], [0.95, 1]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.section
      style={{ y, scale, opacity }}
      className="sticky top-0 min-h-screen flex items-center justify-center px-4"
    >
      <div className="w-full max-w-7xl min-h-[85vh] rounded-3xl border border-white/10 bg-zinc-900 p-5 md:p-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
          {card.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <img
            src={card.image}
            className="hidden lg:block w-full h-full rounded-xl object-cover"
          />
          <div className="rounded-xl lg:bg-zinc-800 md:p-6 overflow-y-auto">
            {content}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
function ProjectCEXCard() {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl lg:bg-zinc-900 lg:border lg:border-zinc-800 lg:p-8 shadow-xl h-full">
      <div className="grid grid-cols-1  gap-8">
        <div className="">
          <section>
            <div className="flex justify-between items-center">
              {" "}
              <h4 className="hidden lg:block text-lg font-semibold text-white mb-4">
                {t("mainResponsibilities")}
              </h4>
              <button
                className="relative overflow-hidden px-6 py-2 rounded-full font-semibold text-white 
bg-gradient-to-r from-purple-500 to-pink-500 
hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  window.open(
                    "https://aicex.ai/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <span className="relative z-10"> {t("visitWebsite")}</span>

                {/* shimmer layer */}
                <span
                  className="absolute inset-0 -translate-x-full 
    bg-gradient-to-r from-transparent via-white/40 to-transparent
    animate-shimmer"
                />
              </button>
            </div>
            <ul className="space-y-2 text-zinc-300">
              <li>• {t("projectOne.responsibilities.leadFrontend")}</li>
              <li>• {t("projectOne.responsibilities.collaboration")}</li>
              <li>• {t("projectOne.responsibilities.futuresModule")}</li>
              <li>• {t("projectOne.responsibilities.spotModule")}</li>
              <li>• {t("projectOne.responsibilities.spotModule")}</li>
              <li>• {t("projectOne.responsibilities.kycFlow")}</li>
              <li>• {t("projectOne.responsibilities.portfolioAssets")}</li>
              <li>• {t("projectOne.responsibilities.eventsCampaigns")}</li>
            </ul>
          </section>

          {/* TECHNOLOGIES */}
          <section>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("technologies")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "ReactJS",
                "TypeScript",
                "NestJS",
                "WebSocket",
                "REST API",
                "JWT / Auth",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-zinc-800 text-zinc-200 border border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
          <div className="hidden lg:block rounded-xl bg-zinc-800 p-4 mt-3 border border-zinc-700">
            <p className="text-sm text-zinc-400"> {t("role")}</p>
            <p className="text-lg font-semibold text-white">
              {t("lead")} Frontend
            </p>
          </div>
        </div>

        {/* META */}
        <div className="lg:hidden rounded-xl bg-zinc-800 p-4 border border-zinc-700">
          <p className="text-sm text-zinc-400">{t("role")}</p>
          <p className="text-lg font-semibold text-white">
            {t("lead")} Frontend
          </p>
        </div>
      </div>
    </div>
  );
}
function ProjectAIBOTCard() {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl lg:bg-zinc-900 lg:border lg:border-zinc-800 lg:p-8 shadow-xl h-full">
      <div className="grid grid-cols-1  gap-8">
        <div className="">
          <section>
            <div className="flex justify-between items-center">
              {" "}
              <h4 className="hidden lg:block text-lg font-semibold text-white mb-4">
                {t("mainResponsibilities")}
              </h4>
              <button
                className="relative overflow-hidden px-6 py-2 rounded-full font-semibold text-white 
bg-gradient-to-r from-purple-500 to-pink-500 
hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  window.open(
                    "https://meta-alpha.com",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <span className="relative z-10">{t("visitWebsite")}</span>

                {/* shimmer layer */}
                <span
                  className="absolute inset-0 -translate-x-full 
    bg-gradient-to-r from-transparent via-white/40 to-transparent
    animate-shimmer"
                />
              </button>
            </div>
            <ul className="space-y-2 text-zinc-300">
              <li>• {t("projectTwo.responsibilities.frontendArchitecture")}</li>
              <li>• {t("projectTwo.responsibilities.tradingSignalSystem")}</li>
              <li>• {t("projectTwo.responsibilities.depositWithdrawal")}</li>
              <li>• {t("projectTwo.responsibilities.adminSystem")}</li>
              <li>• {t("projectTwo.responsibilities.userOverview")}</li>
              <li>• {t("projectTwo.responsibilities.kycVerification")}</li>
              <li>• {t("projectTwo.responsibilities.voucherPromotion")}</li>
              <li>• {t("projectTwo.responsibilities.authFlow")}</li>
            </ul>
          </section>

          {/* TECHNOLOGIES */}
          <section>
            <h4 className="text-lg font-semibold text-white mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "ReactJS",
                "TypeScript",
                "NestJS",
                "WebSocket",
                "REST API",
                "JWT / Auth",
                "Binance API",
                "Bitget API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-zinc-800 text-zinc-200 border border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
          <div className="hidden lg:block rounded-xl bg-zinc-800 p-4 mt-3 border border-zinc-700">
            <p className="text-sm text-zinc-400">{t("role")}</p>
            <p className="text-lg font-semibold text-white">
              {t("lead")} Frontend
            </p>
          </div>
        </div>

        {/* META */}
        <div className="lg:hidden rounded-xl bg-zinc-800 p-4 border border-zinc-700">
          <p className="text-sm text-zinc-400">{t("role")}</p>
          <p className="text-lg font-semibold text-white">
            {t("lead")} Frontend
          </p>
        </div>
      </div>
    </div>
  );
}
function ProjectXAICard() {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl lg:bg-zinc-900 lg:border lg:border-zinc-800 lg:p-8 shadow-xl h-full">
      <div className="grid grid-cols-1  gap-8">
        <div className="">
          <section>
            <div className="flex justify-between items-center">
              {" "}
              <h4 className="hidden lg:block text-lg font-semibold text-white mb-4">
                {t("mainResponsibilities")}
              </h4>
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition mb-2">
                CLOSED
              </button>
            </div>
            <ul className="space-y-2 text-zinc-300">
              <li>• {t("projectThree.responsibilities.investmentFund")}</li>
              <li>• {t("projectThree.responsibilities.depositWithdrawal")}</li>
              <li>• {t("projectThree.responsibilities.userOverview")}</li>
              <li>• {t("projectThree.responsibilities.adminDashboard")}</li>
              <li>• {t("projectThree.responsibilities.eventCampaign")}</li>
              <li>• {t("projectThree.responsibilities.fundPerformance")}</li>
              <li>• {t("projectThree.responsibilities.voucherPromotion")}</li>
              <li>• {t("projectThree.responsibilities.walletLogin")}</li>
            </ul>
          </section>

          {/* TECHNOLOGIES */}
          <section>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("technologies")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "ReactJS",
                "TypeScript",
                "NestJS",
                "WebSocket",
                "REST API",
                "JWT / Auth",
                "WalletConnect",
                "Web3",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-zinc-800 text-zinc-200 border border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div
            className="hidden lg:block   mt-3 rounded-xl p-[1px] 
  bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 
  animate-pulse"
          >
            <div className="rounded-xl bg-zinc-900 p-4">
              <p className="text-sm text-amber-400 tracking-wide uppercase">
                🚀 {t("totalRevenue")}
              </p>

              <p
                className="mt-1 text-lg font-extrabold text-white 
      bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent"
              >
                {t("totalRevenue")}
              </p>
            </div>
          </div>
        </div>

        {/* META */}
        <div
          className="lg:hidden relative rounded-xl p-[1px] 
  bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 
  animate-pulse"
        >
          <div className="rounded-xl bg-zinc-900 p-4">
            <p className="text-sm text-amber-400 tracking-wide uppercase">
              🚀 {t("totalRevenue")}
            </p>

            <p
              className="mt-1 text-lg font-extrabold text-white 
      bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent"
            >
              {t("totalRevenue")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function RealEstateCard() {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl lg:bg-zinc-900 lg:border lg:border-zinc-800 lg:p-8 shadow-xl h-full">
      <div className="grid grid-cols-1  gap-8">
        <div className="">
          <section>
            <div className="flex justify-between items-center">
              {" "}
              <h4 className="hidden lg:block text-lg font-semibold text-white mb-4">
                {t("mainResponsibilities")}
              </h4>
              <button
                className="relative overflow-hidden px-6 py-2 rounded-full font-semibold text-white 
bg-gradient-to-r from-purple-500 to-pink-500 
hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  window.open(
                    "https://batdongsan40.com/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <span className="relative z-10">{t("visitWebsite")}</span>

                {/* shimmer layer */}
                <span
                  className="absolute inset-0 -translate-x-full 
    bg-gradient-to-r from-transparent via-white/40 to-transparent
    animate-shimmer"
                />
              </button>
            </div>
            <ul className="space-y-2 text-zinc-300">
              <li>
                • {t("projectFour.responsibilities.propertyListingSearch")}
              </li>
              <li>
                • {t("projectFour.responsibilities.propertyDetailGallery")}
              </li>
              <li>• {t("projectFour.responsibilities.realEstateAdmin")}</li>
              <li>• {t("projectFour.responsibilities.userSavedProperties")}</li>
              <li>• {t("projectFour.responsibilities.agentVerification")}</li>
              <li>• {t("projectFour.responsibilities.promotionFeatured")}</li>
              <li>• {t("projectFour.responsibilities.authFlow")}</li>
            </ul>
          </section>

          <div className="hidden lg:block rounded-xl bg-zinc-800 p-4 mt-3 border border-zinc-700">
            <p className="text-sm text-zinc-400">{t("role")}</p>
            <p className="text-lg font-semibold text-white">
              Dev Frontend And Mobile
            </p>
          </div>
        </div>

        {/* META */}
        <div className="lg:hidden rounded-xl bg-zinc-800 p-4 border border-zinc-700">
          <p className="text-sm text-zinc-400">{t("role")}</p>
          <p className="text-lg font-semibold text-white">
            Dev Frontend And Mobile
          </p>
        </div>
      </div>
    </div>
  );
}
