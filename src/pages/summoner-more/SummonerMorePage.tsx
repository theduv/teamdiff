import { memo, useContext } from "react";

import { ChampionsList } from "./components/champions-list/ChampionsList";
import { SummonerMorePageContext } from "./contexts/SummonerMorePage.context";
import { SelectedChampionSummary } from "./components/selected-champion-summary/SelectedChampionSummary";

const SummonerMorePageBase = () => {
  const { summoner } = useContext(SummonerMorePageContext);

  if (!summoner) return null;

  return (
    <div className="px-96 space-y-4 flex-col text-primary flex justify-center items-center h-full">
      <ChampionsList />
      <SelectedChampionSummary />
    </div>
  );
};

export const SummonerMorePage = memo(SummonerMorePageBase);
