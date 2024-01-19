import React from "react";
import { Toast } from "./Toast";

export const ToastsContainer = ({ toasts }) => {
  return (
    <div className="fixed right-[16px] top-[16px] z-[9999] flex flex-col-reverse gap-y-[12px]">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
