import { useEffect, useState } from "react";
import "./Footer.css";
import { Check, Copy } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    const container = document.getElementById("particle-container");
    if (!container) return;

    const particleCount = 100;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const span = document.createElement("span");
      span.classList.add("particle");

      const size = 3 + Math.random() * 6;
      const distance = 10 + Math.random() * 15;
      const position = 10 + Math.random() * 80;
      const time = 3 + Math.random() * 3;
      const delay = -1 * (Math.random() * 10);

      span.style.setProperty("--dim", `${size}rem`);
      span.style.setProperty("--uplift", `${distance}rem`);
      span.style.setProperty("--pos-x", `${position}%`);
      span.style.setProperty("--dur", `${time}s`);
      span.style.setProperty("--delay", `${delay}s`);

      fragment.appendChild(span);
    }

    container.appendChild(fragment);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <>
        <div className="contact-slider-wrapper">
          <div className="contact-slider">
            <span className="flex items-center gap-6">
              Contact me —
              <CopyPhone label="Zalo" phone="0862289117" />
              ·
              <CopyPhone label="WhatsApp" phone="0862289117" />
              ·
              <CopyPhone label="Phone" phone="0862289117" />
            </span>

            <span className="flex items-center gap-6">
              Contact me —
              <CopyPhone label="Zalo" phone="0862289117" />
              ·
              <CopyPhone label="WhatsApp" phone="0862289117" />
              ·
              <CopyPhone label="Phone" phone="0862289117" />
            </span>
          </div>
        </div>
    </>
  );
}

function CopyPhone({ label, phone }: { label: string; phone: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span className="flex items-center gap-2">
      <span>
        {label}: <strong>{phone}</strong>
      </span>

      <button
        onClick={handleCopy}
        className="p-1 rounded hover:bg-black/10 transition"
        aria-label="Copy phone number"
      >
        {copied ? (
          <Check size={16} className="text-green-600" />
        ) : (
          <Copy size={16} />
        )}
      </button>
    </span>
  );
}
