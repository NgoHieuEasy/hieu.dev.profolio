import { Phone, MessageCircle } from "lucide-react";
import zaloIcon from "../assets/zalo-icon.png";
import whatAppIcon from "../assets/whatapp-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import { useToastStore } from "../zustand/useToastStore";
export default function ButtonSocialFloat() {
  const { showToast } = useToastStore();
  return (
    <div className="relative h-16 group">
      {/* Main Button */}
      <button
        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
        // className="w-20 h-16  bg-gradient-to-r from-purple-500 to-pink-500
        // flex items-center justify-center text-white font-bold
        // transition-transform duration-300 group-hover:scale-110"
      >
        CONTACT ME
      </button>

      {/* Phone */}
      <button
        onClick={async () => {
          await navigator.clipboard.writeText("0862289117");
          showToast("success", "Copied");
        }}
        className="absolute right-[-60px] -translate-x-0 -top-[-10px]
        w-12 h-12 rounded-full bg-white text-white
        flex items-center justify-center
        opacity-0 scale-50 translate-y-4
        transition-all duration-300 delay-100
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
      >
        <img
          src={phoneIcon}
          alt="phoneIcon"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Zalo */}
      <button
        onClick={async () => {
          await navigator.clipboard.writeText("0862289117");
          showToast("success", "Copied");
        }}
        className="absolute right-[-60px] -translate-x-0 -top-12
        w-12 h-12 rounded-full bg-white text-white
        flex items-center justify-center
        opacity-0 scale-50 translate-y-4
        transition-all duration-300 delay-200
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 "
      >
        <img
          src={zaloIcon}
          alt="zaloIcon"
          className="w-full h-full object-cover"
        />
      </button>

      {/* WhatsApp */}
      <button
        onClick={() => window.open("https://wa.me/84862289117", "_blank")}
        className="absolute right-[-60px] -translate-x-0 -top-[105px]
        w-12 h-12 rounded-full bg-white text-white
        flex items-center justify-center
        opacity-0 scale-50 translate-y-4
        transition-all duration-300 delay-300
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
      >
        <img
          src={whatAppIcon}
          alt="whatAppIcon"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}
