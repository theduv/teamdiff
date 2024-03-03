import { memo } from "react";
import { Summary } from "./components/summary/Summary";

const SummonerMorePageBase = () => {
  return (
    <div className="text-secondary">
      <Summary />
    </div>
  );
};

export const SummonerMorePage = memo(SummonerMorePageBase);
