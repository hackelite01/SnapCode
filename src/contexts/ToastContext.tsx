import React, { createContext, useContext, useState, useCallback } from "react";
import { MdCheck, MdError, MdInfo, MdWarning, MdClose } from "react-icons/md";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substring(7);
    const newToast: Toast = { id, message, type };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <MdCheck className="text-green-500" />;
      case "error":
        return <MdError className="text-red-500" />;
      case "warning":
        return <MdWarning className="text-yellow-500" />;
      case "info":
        return <MdInfo className="text-blue-500" />;
    }
  };

  const getColorClasses = (type: ToastType) => {
    switch (type) {
      case "success":
        return "border-green-500/50 bg-green-500/10";
      case "error":
        return "border-red-500/50 bg-red-500/10";
      case "warning":
        return "border-yellow-500/50 bg-yellow-500/10";
      case "info":
        return "border-blue-500/50 bg-blue-500/10";
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-xl shadow-xl animate-in slide-in-from-right ${getColorClasses(
              toast.type
            )}`}
          >
            <div className="text-xl">{getIcon(toast.type)}</div>
            <p className="text-white text-sm font-medium">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 text-white/50 hover:text-white/90"
            >
              <MdClose />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
