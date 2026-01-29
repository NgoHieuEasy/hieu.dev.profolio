import { useState } from "react";
import "./Footer.css";
import { Check, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact-slider-wrapper">
        <div className="contact-slider">
          <span className="flex items-center gap-6">
            {t("contactMe")} —
            <CopyPhone label="Zalo" phone="0862289117" />
            ·
            <CopyPhone label="WhatsApp" phone="0862289117" />
            ·
            <CopyPhone label="Phone" phone="0862289117" />
          </span>

          <span className="flex items-center gap-6">
            {t("contactMe")} —
            <CopyPhone label="Zalo" phone="0862289117" />
            ·
            <CopyPhone label="WhatsApp" phone="0862289117" />
            ·
            <CopyPhone label={t("phone")} phone="0862289117" />
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
