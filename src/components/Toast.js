import React, { useEffect, useRef } from "react";
import {
  IconAlertCircleFilled,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
  IconX,
} from "@tabler/icons-react";
import { useToast } from "../hooks/useToast";

const toastTypes = {
  success: {
    icon: <IconCircleCheckFilled className="text-[#22c55e]" />,
    iconClass: "success-icon",
    progressBarClass: "bg-[#22c55e]",
  },
  warning: {
    icon: <IconAlertCircleFilled className="text-[#f97316]" />,
    iconClass: "warning-icon",
    progressBarClass: "bg-[#f97316]",
  },
  info: {
    icon: <IconInfoCircleFilled className="text-[#3b82f6]" />,
    iconClass: "info-icon",
    progressBarClass: "bg-[#3b82f6]",
  },
  error: {
    icon: <IconCircleXFilled className="text-[#ef4444]" />,
    iconClass: "error-icon",
    progressBarClass: "bg-[#ef4444]",
  },
};

export const Toast = ({ message, type, id }) => {
  const { icon, iconCLass, toastClass, progressBarClass } = toastTypes[type];
  const toast = useToast();
  const timerID = useRef(null);

  const handleDismiss = () => {
    toast.remove(id);
  };

  useEffect(() => {
    timerID.current = setTimeout(() => {
      handleDismiss();
    }, 4000);

    return () => {
      clearTimeout(timerID.current);
    };
  }, []);

  return (
    <div
      className={`relative flex w-[320px] items-center overflow-hidden rounded-[8px] bg-[#ffffff] p-[16px] shadow-[0_4px_4px_rgba(0,0,0,0.1)] ${toastClass}`}
    >
      <span className={iconCLass}>{icon}</span>
      <p className="ml-[12px] text-[14px] font-medium text-[#151626]">
        {message}
      </p>
      <button
        className="ml-auto cursor-pointer border-none bg-none"
        onClick={handleDismiss}
      >
        <IconX className="size-[18px] text-[#aeb0d7]" />
      </button>

      {/* Toast Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[rgba(0,0,0,0.1)]">
        <div className={`animate-progressBar h-full ${progressBarClass}`}></div>
      </div>
    </div>
  );
};
