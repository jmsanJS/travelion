import React, { createContext, useContext, useState } from "react";

interface SettingsContextType {
  isKm: boolean;
  isCelsius: boolean;
  isEUR: boolean;
  toggleDistance: () => void;
  toggleDegrees: () => void;
  togglePrice: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isKm, setIsKm] = useState<boolean>(false);
  const [isCelsius, setIsCelsius] = useState<boolean>(false);
  const [isEUR, setIsEUR] = useState<boolean>(false);

  const toggleDistance = () => setIsKm((prev) => !prev);
  const toggleDegrees = () => setIsCelsius((prev) => !prev);
  const togglePrice = () => setIsEUR((prev) => !prev);

  return (
    <SettingsContext.Provider
      value={{ toggleDistance, toggleDegrees, togglePrice, isKm, isCelsius, isEUR }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettings must be used within SettingsContextProvider"
    );
  }
  return context;
};
