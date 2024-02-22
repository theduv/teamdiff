import { useParams } from "wouter";
import { SummonerView } from "./SummonerView";
import { SummonerViewContextProvider } from "./contexts/SummonerView.context";
import { memo } from "react";

const SummonerViewContainerBase = () => {
  const params = useParams();
  if (!params.id || !params.id.includes("-")) {
    return <div>Wrong summoner format !</div>;
  }
  const [summonerName, summonerTag] = params.id.split("-");

  return (
    <SummonerViewContextProvider
      summonerName={summonerName}
      summonerTag={summonerTag}
    >
      <SummonerView />
    </SummonerViewContextProvider>
  );
};

export default memo(SummonerViewContainerBase);
