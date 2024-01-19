import { useToast } from "./hooks/useToast";

export const App = () => {
  const toast = useToast();
  return (
    <div className="flex h-screen items-center justify-center bg-[#f0f3fb]">
      <div className="flex w-[340px] flex-col justify-center gap-y-[20px] rounded-[8px] bg-white p-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
        <button
          className="cursor-pointer rounded-[8px] border-none bg-[#22c55e] px-[24px] py-[12px] text-[18px] font-medium text-[#fff]"
          onClick={() => toast.success("Success toast notification")}
        >
          Success
        </button>
        <button
          className="cursor-pointer rounded-[8px] border-none bg-[#3b82f6] px-[24px] py-[12px] text-[18px] font-medium text-[#fff]"
          onClick={() => toast.info("Info toast notification")}
        >
          Info
        </button>
        <button
          className="cursor-pointer rounded-[8px] border-none bg-[#f97316] px-[24px] py-[12px] text-[18px] font-medium text-[#fff]"
          onClick={() => toast.warning("Warning toast notification")}
        >
          Warning
        </button>
        <button
          className="cursor-pointer rounded-[8px] border-none bg-[#ef4444] px-[24px] py-[12px] text-[18px] font-medium text-[#fff]"
          onClick={() => toast.error("Error toast notification")}
        >
          Error
        </button>
      </div>
    </div>
  );
};
