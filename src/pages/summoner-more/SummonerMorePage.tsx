import { memo, useContext } from "react";

import { ChampionsList } from "./components/champions-list/ChampionsList";
import { SummonerMorePageContext } from "./contexts/SummonerMorePage.context";
import { SelectedChampionSummary } from "./components/selected-champion-summary/SelectedChampionSummary";

const SummonerMorePageBase = () => {
  const { summoner } = useContext(SummonerMorePageContext);

  if (!summoner) return null;

  return (
    <div className="text-primary flex justify-center items-center h-full">
      <ChampionsList />
      <SelectedChampionSummary />
    </div>
  );
};

export const SummonerMorePage = memo(SummonerMorePageBase);
