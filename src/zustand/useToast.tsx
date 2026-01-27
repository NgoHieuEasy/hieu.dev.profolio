import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useToastStore } from "./useToastStore";

const icons = {
  success: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path
        d="M12.5 2.083C6.747 2.083 2.083 6.747 2.083 12.5S6.747 22.917 12.5 22.917 22.917 18.253 22.917 12.5 18.253 2.083 12.5 2.083Zm0 18.75c-4.595 0-8.333-3.738-8.333-8.333S7.905 4.167 12.5 4.167 20.833 7.905 20.833 12.5 17.095 20.833 12.5 20.833Zm3.923-12.055 1.473 1.473-6.438 6.464-3.862-3.861 1.473-1.473 2.389 2.389 4.965-4.992Z"
        fill="#00FFB2"
      />
    </svg>
  ),
  error: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path
        d="M12.5 7.945v5.73M12.5 17.055v-.52M10.117 3.792C10.723 3.276 11.026 3.018 11.343 2.867c.361-.173.757-.262 1.157-.262.4 0 .796.089 1.157.262.318.151.621.409 1.226.926.624.531 1.258.8 2.091.865.793.063 1.19.095 1.521.212.765.27 1.367.872 1.637 1.637.117.33.149.727.213 1.521.065.834.333 1.466.864 2.09.517.605.776.908.927 1.225.35.733.35 1.584 0 2.315-.151.318-.41.621-.925 1.226-.518.58-.823 1.317-.867 2.091-.063.793-.096 1.19-.213 1.521-.134.378-.35.721-.634 1.004-.283.284-.626.5-1.004.633-.33.117-.727.15-1.52.213-.834.066-1.466.334-2.091.865-.605.517-.908.776-1.226.927-.361.172-.757.262-1.157.262-.4 0-.796-.09-1.157-.262-.317-.151-.62-.41-1.226-.926-.579-.517-1.316-.822-2.09-.867-.793-.063-1.19-.096-1.52-.213-.378-.134-.721-.35-1.004-.633-.284-.283-.5-.626-.634-1.004-.117-.33-.15-.728-.213-1.522-.044-.774-.349-1.51-.865-2.09-.517-.605-.775-.908-.927-1.225-.172-.362-.262-.758-.262-1.158 0-.4.09-.795.262-1.157.151-.318.41-.621.926-1.226.541-.636.8-1.274.865-2.09.063-.793.095-1.19.212-1.521.134-.378.35-.721.633-1.004.284-.283.627-.5 1.005-.633.33-.117.727-.15 1.52-.213.774-.044 1.51-.35 2.09-.865Z"
        stroke="#C22D2D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  info: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <circle
        cx="12.5"
        cy="12.5"
        r="9.375"
        stroke="#3B82F6"
        strokeWidth="1.5"
      />
      <path
        d="M12.5 11.458v5.208"
        stroke="#3B82F6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12.5" cy="8.333" r="1" fill="#3B82F6" />
    </svg>
  ),

  warning: (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path
        d="M12.5 3.125c.43 0 .83.23 1.04.6l8.333 14.583c.21.37.21.83 0 1.2-.21.37-.61.6-1.04.6H4.167c-.43 0-.83-.23-1.04-.6a1.25 1.25 0 0 1 0-1.2L11.46 3.725c.21-.37.61-.6 1.04-.6Z"
        stroke="#FACC15"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9.375v5.208M12.5 17.708h.01"
        stroke="#FACC15"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const textColors = {
  success: "text-green-500",
  error: "text-red-400",
  info: "text-blue-400",
  warning: "text-yellow-400",
};

const backgroundColors = {
  success: "bg-transparent border border-green-500",
  error: "bg-transparent border border-red-300",
  info: "bgtransparent  border border-blue-300",
  warning: "bg-transparent  border border-yellow-300",
};

const ToastComponent = () => {
  const { toastData, clearToast } = useToastStore();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  if (!toastData) return null;

  const { type, message } = toastData;

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          x: 50,
          y: 0,
          opacity: 0,
        }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{
          x: isMobile ? 0 : 50,
          y: isMobile ? 50 : 0,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        className={`
    fixed  ${backgroundColors[type]} ${
      isMobile
        ? "bottom-4 left-4 right-4"
        : "top-8 right-4 sm:right-10 left-auto"
    }
    w-[calc(100%-2rem)] sm:w-full sm:max-w-[353px]
    h-auto py-2 px-4 flex items-center justify-start gap-3
    rounded-[10px] shadow-md
    text-white
    mx-auto sm:mx-0
  `}
        style={{ zIndex: 99999 }}
      >
        {icons[type]}
        <div
          className={`text-[16px] flex-1 ${textColors[type]} font-[400] leading-[24px] tracking-[0.24px] break-all`}
        >
          {message}
        </div>
        <button
          onClick={clearToast}
          className="text-md font-bold text-white hover:text-gray-300 px-[6px] py-[1px] cursor-pointer"
        >
          <X className={`${textColors[type]} `} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToastComponent;
