import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LANGS = {
  vi: { label: "Tiếng Việt", flag: "🇻🇳" },
  en: { label: "English", flag: "🇺🇸" },
  ja: { label: "日本語", flag: "🇯🇵" },
  ko: { label: "한국어", flag: "🇰🇷" },
  zh: { label: "中文", flag: "🇨🇳" },
} as const;

type LangKey = keyof typeof LANGS;

export default function LanguageSwitcher({
  lang,
  onChange,
}: {
  lang: LangKey;
  onChange: (l: LangKey) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* BUTTON */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg
                   bg-zinc-900 border border-white/10
                   text-white hover:bg-zinc-800 transition"
      >
        <span className="text-lg">{LANGS[lang].flag}</span>
        <span className="text-sm font-medium hidden sm:block">
          {LANGS[lang].label}
        </span>
        <ChevronDown
          size={16}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44
                       rounded-xl bg-zinc-900 border border-white/10
                       shadow-xl z-50 overflow-hidden"
          >
            {(Object.keys(LANGS) as LangKey[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  onChange(key);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2
                  text-sm transition hover:bg-zinc-800
                  ${lang === key ? "bg-zinc-800" : ""}`}
              >
                <span className="text-lg">{LANGS[key].flag}</span>
                <span className="text-white">{LANGS[key].label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
