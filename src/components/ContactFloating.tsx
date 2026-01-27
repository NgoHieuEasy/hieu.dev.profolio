import zaloIcon from "../assets/zalo-icon.png";
import whatAppIcon from "../assets/whatapp-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import { useToastStore } from "../zustand/useToastStore";
export default function ContactFloating() {
  const { showToast } = useToastStore();

  const copyPhone = async () => {
    await navigator.clipboard.writeText("0862289117");
    showToast("success", "Copied");
  };

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2
        z-50 flex flex-col gap-4"
    >
      {/* PHONE */}
      <GlowButton onClick={copyPhone}>
        <img src={phoneIcon} alt="phone" className="w-6 h-6" />
      </GlowButton>

      {/* ZALO */}
      <GlowButton onClick={copyPhone} glow="blue">
        <img src={zaloIcon} alt="zalo" className="w-6 h-6" />
      </GlowButton>

      {/* WHATSAPP */}
      <GlowButton
        onClick={() => window.open("https://wa.me/84862289117", "_blank")}
        glow="green"
      >
        <img src={whatAppIcon} alt="whatsapp" className="w-6 h-6" />
      </GlowButton>
    </div>
  );
}
function GlowButton({
  children,
  onClick,
  glow = "green",
}: {
  children: React.ReactNode;
  onClick: () => void;
  glow?: "green" | "blue";
}) {
  const glowColor =
    glow === "blue" ? "shadow-blue-400/60" : "shadow-green-400/60";

  return (
    <button
      onClick={onClick}
      className={`
        relative w-14 h-14 rounded-full
        bg-white
        flex items-center justify-center
        shadow-lg ${glowColor}
        animate-pulseGlow
        hover:scale-110
        transition
      `}
    >
      {children}
    </button>
  );
}
