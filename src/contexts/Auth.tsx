import { ReactNode, createContext } from "react";

import { MOCK_SUMMONERS } from "../mock-data/summoners";
import { SummonerView } from "../types/lib";

type AuthContextValue = {
  summoner?: SummonerView;
  isConnected: boolean;
};

export const AuthContext = createContext<AuthContextValue>({
  isConnected: false,
});

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const contextValue: AuthContextValue = {
    summoner: {
      ...MOCK_SUMMONERS[2],
    },
    isConnected: true,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
