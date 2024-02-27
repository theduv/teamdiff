import { memo } from "react";
import { SummonerSummary } from "../summoner/components/summary/SummonerSummary";

const SummonerMorePageBase = () => {
  return (
    <div>
      <SummonerSummary />
    </div>
  );
};

export const SummonerMorePage = memo(SummonerMorePageBase);
