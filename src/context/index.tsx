"use client";

import { AppContextType, Player } from "@/types";
import { createContext, useContext, useState, ReactNode } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [player, setPlayer] = useState<Player | {}>({});
  const [players, setPlayers] = useState<Player[]>([]);

  return (
    <AppContext.Provider value={{ player, setPlayer, players, setPlayers }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
