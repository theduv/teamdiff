import { ReactNode, createContext } from "react";
import { SummonerView } from "../../../types/lib";
import { useSummonerByName } from "../../../hooks/queries/summoner";

type SummonerPageContextValue = {
  summoner: SummonerView | null | undefined;
};

export const SummonerPageContext = createContext<SummonerPageContextValue>({
  summoner: null,
});

type SummonerPageContextProviderProps = {
  summonerName: string;
  summonerTag: string;
  children: ReactNode;
};

export const SummonerPageContextProvider = ({
  summonerName,
  summonerTag,
  children,
}: SummonerPageContextProviderProps) => {
  const { data: summoner } = useSummonerByName(summonerName, summonerTag);

  const contextValue = { summoner };

  return (
    <SummonerPageContext.Provider value={contextValue}>
      {children}
    </SummonerPageContext.Provider>
  );
};
