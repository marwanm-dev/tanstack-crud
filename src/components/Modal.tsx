import { type ReactNode, useEffect } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
