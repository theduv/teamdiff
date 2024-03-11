import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useParams } from "wouter";
import { noop } from "lodash";

import { SummonerView } from "../../../lib/types/lib";
import { useSummonerByName } from "../../../hooks/queries/summoner";
import { CHAMPION_ID } from "../../../hooks/enums/lib";

type SummonerMorePageContextValue = {
  summoner: SummonerView | null | undefined;
  selectedChampion: CHAMPION_ID | null;
  setSelectedChampion: Dispatch<SetStateAction<CHAMPION_ID | null>>;
};

export const SummonerMorePageContext =
  createContext<SummonerMorePageContextValue>({
    summoner: null,
    selectedChampion: null,
    setSelectedChampion: noop,
  });

type SummonerMorePageContextProviderProps = {
  children: ReactNode;
};

export const SummonerMorePageContextProvider = ({
  children,
}: SummonerMorePageContextProviderProps) => {
  const params = useParams();
  const [summonerName, summonerTag] =
    params && params.id && params.id.includes("-")
      ? params.id.split("-")
      : ["undefined", "undefined"];

  let { data: summoner } = useSummonerByName(summonerName, summonerTag);

  const [selectedChampion, setSelectedChampion] = useState(
    summoner ? summoner.championGrades[0].championID : null
  );

  const contextValue = {
    summoner,
    selectedChampion,
    setSelectedChampion,
  };

  return (
    <SummonerMorePageContext.Provider value={contextValue}>
      {children}
    </SummonerMorePageContext.Provider>
  );
};
