import { ReactNode, createContext } from "react";

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
      PUUID:
        "mgokFezKKl-KEpF9ELWTw3kZ6I8eOwUfRpBbk-LHwSoxsLaV3UrkddteJTpRjFLR7XaX3qJ2QT_Puw",
      name: "Nelien",
      tag: "EUW",
      iconURL:
        "https://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/5.png",
      globalGrade: 4.9,
      championGrades: [],
      givenReviewsIDs: [],
      recievedReviewsIDs: [],
    },
    isConnected: true,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
