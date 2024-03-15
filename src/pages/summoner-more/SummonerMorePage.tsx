import { memo, useContext } from "react";

import ChampionsList from "./components/champions-list/ChampionsList";
import SelectedChampionSummary from "./components/selected-champion-summary/SelectedChampionSummary";

import { SummonerMorePageContext } from "./contexts/SummonerMorePage.context";

const SummonerMorePageBase = () => {
  const { summoner } = useContext(SummonerMorePageContext);

  if (!summoner) return null;

  return (
    <div className="px-96 space-x-4 text-primary flex justify-center items-center h-full p-4">
      <ChampionsList />
      <SelectedChampionSummary />
    </div>
  );
};

export default memo(SummonerMorePageBase);
