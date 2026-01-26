import { Phone, MessageCircle } from "lucide-react";

export default function ButtonSocialFloat() {
  return (
    <div className="relative h-16 group">
      {/* Main Button */}
      <button
        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
        // className="w-20 h-16  bg-gradient-to-r from-purple-500 to-pink-500
        // flex items-center justify-center text-white font-bold
        // transition-transform duration-300 group-hover:scale-110"
      >
        Connect me
      </button>

      {/* Phone */}
      <a
        href="tel:0123456789"
        className="absolute right-[-60px] -translate-x-0 -top-[-10px]
        w-12 h-12 rounded-full bg-black text-white
        flex items-center justify-center
        opacity-0 scale-50 translate-y-4
        transition-all duration-300 delay-100
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
      >
        <Phone size={18} />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0123456789"
        target="_blank"
        className="absolute right-[-60px] -translate-x-0 -top-12
        w-12 h-12 rounded-full bg-black text-white
        flex items-center justify-center
        opacity-0 scale-50 translate-y-4
        transition-all duration-300 delay-200
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
      >
        <MessageCircle size={18} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/84123456789"
        target="_blank"
        className="absolute right-[-60px] -translate-x-0 -top-[105px]
        w-12 h-12 rounded-full bg-black text-white
        flex items-center justify-center
        opacity-0 scale-50 translate-y-4
        transition-all duration-300 delay-300
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
      >
        <MessageCircle size={18} />
      </a>
    </div>
  );
}
