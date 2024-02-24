import { createContext, ReactNode } from "react";
import { SummonerView } from "../../../types/lib";

type SummonerMorePageContextValue = {
  summoner: SummonerView | null;
};

export const SummonerMorePageContext =
  createContext<SummonerMorePageContextValue>({
    summoner: null,
  });

type SummonerMorePageContextProviderProps = {
  children: ReactNode;
};

export const SummonerMorePageContextProvider = ({
  children,
}: SummonerMorePageContextProviderProps) => {
  const contextValue = {
    summoner: null,
  };

  return (
    <SummonerMorePageContext.Provider value={contextValue}>
      {children}
    </SummonerMorePageContext.Provider>
  );
};
