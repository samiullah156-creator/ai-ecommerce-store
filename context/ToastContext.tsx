import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast UI Overlay */}
      <div
        className={`fixed bottom-5 right-5 z-50 transition-all duration-500 transform ${
          toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="bg-aura-charcoal text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 border-l-4 border-aura-blue">
          <CheckCircle className="text-aura-blue h-5 w-5" />
          <span className="font-medium">{toast.message}</span>
        </div>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};