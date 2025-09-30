import { createContext, useContext, useState, type ReactNode } from "react";

interface ErrorContextType {
    setError: (message?: string, code?: number) => void;
    clearError: () => void;
    error: { message?: string; code?: number } | null;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
    const [error, setErrorState] = useState<{ message?: string; code?: number } | null>(null);

    const setError = (message?: string, code?: number) => {
        setErrorState({ message, code });
    };

    const clearError = () => setErrorState(null);

    return (
        <ErrorContext.Provider value={{ error, setError, clearError }}>
            {children}
        </ErrorContext.Provider>
    );
};

// Custom hook to use context easily
export const useError = () => {
    const ctx = useContext(ErrorContext);
    if (!ctx) throw new Error("useError must be used within ErrorProvider");
    return ctx;
};