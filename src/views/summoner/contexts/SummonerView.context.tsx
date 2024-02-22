import { ReactNode, createContext } from "react";
import { SummonerView } from "../../../types/lib";
import { useSummonerByName } from "../../../hooks/queries/summoner";

type SummonerViewContextValue = {
  summoner: SummonerView | null | undefined;
};

export const SummonerViewContext = createContext<SummonerViewContextValue>({
  summoner: null,
});

type SummonerViewContextProviderProps = {
  summonerName: string;
  summonerTag: string;
  children: ReactNode;
};

export const SummonerViewContextProvider = ({
  summonerName,
  summonerTag,
  children,
}: SummonerViewContextProviderProps) => {
  const { data: summoner } = useSummonerByName(summonerName, summonerTag);

  const contextValue = { summoner };

  return (
    <SummonerViewContext.Provider value={contextValue}>
      {children}
    </SummonerViewContext.Provider>
  );
};
