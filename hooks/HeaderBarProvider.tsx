import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of your context
interface HeaderBarProviderProps {
  children: ReactNode;
}

// Create the context with a default value
const HeaderBarContext = createContext<
  | {
      isShown: boolean;
      show: () => void;
      hide: () => void;
    }
  | undefined
>(undefined);

// Create a provider component
export const HeaderBarProvider = ({ children }: HeaderBarProviderProps) => {
  const [isShown, setIsShown] = useState(false);

  const show = () => {
    setIsShown(true);
  };

  const hide = () => {
    setIsShown(false);
  };

  return (
    <HeaderBarContext.Provider value={{ isShown, show, hide }}>
      {children}
    </HeaderBarContext.Provider>
  );
};

export const useHeaderBarContext = () => {
  const context = useContext(HeaderBarContext);
  if (context === undefined)
    throw new Error(
      "useHeaderBarContext must be used within a HeaderBarProvider"
    );
  return context;
};
