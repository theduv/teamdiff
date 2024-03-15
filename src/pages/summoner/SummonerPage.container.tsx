import { memo } from "react";
import { useParams } from "wouter";

import SummonerPage from "./SummonerPage";

import { SummonerPageContextProvider } from "./contexts/SummonerPage.context";

const SummonerPageContainerBase = () => {
  const params = useParams();
  if (!params.id || !params.id.includes("-")) {
    return <div>Wrong summoner format !</div>;
  }
  const [summonerName, summonerTag] = params.id.split("-");

  return (
    <SummonerPageContextProvider
      summonerName={summonerName}
      summonerTag={summonerTag}
    >
      <SummonerPage />
    </SummonerPageContextProvider>
  );
};

export default memo(SummonerPageContainerBase);
