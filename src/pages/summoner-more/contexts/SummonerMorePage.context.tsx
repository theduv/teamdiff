import { createContext, ReactNode } from "react";
import { SummonerView } from "../../../types/lib";
import { useParams } from "wouter";
import { isSummonerNameAndTagValid } from "../../../lib/functions/isSummonerNameAndTagValid";
import { useSummonerByName } from "../../../hooks/queries/summoner";

type SummonerMorePageContextValue = {
  summoner: SummonerView | null | undefined;
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
  const params = useParams();
  let summoner = null;

  if (!params.id || !isSummonerNameAndTagValid(params.id, "-")) {
    summoner = null;
  } else {
    const [summonerName, summonerID] = params.id.split("-");

    summoner = useSummonerByName(summonerName, summonerID).data;
  }

  const contextValue = {
    summoner,
  };

  return (
    <SummonerMorePageContext.Provider value={contextValue}>
      {children}
    </SummonerMorePageContext.Provider>
  );
};
