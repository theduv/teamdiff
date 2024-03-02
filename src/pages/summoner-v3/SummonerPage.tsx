import { memo, useContext } from "react";

import { SummonerPageContext } from "./contexts/SummonerPage.context";
import { SummonerSummary } from "./components/summary/SummonerSummary";
import { NewReview } from "./components/new-review/NewReview";
import { SummonerRecentReviews } from "./components/recent-reviews/SummonerRecentReviews";

const SummonerPageBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner) return <div>Error while retrieving this summoner.</div>;

  return (
    <div className="px-96 h-full">
      <div className="flex-1 bg-primary w-full space-y-2">
        <SummonerSummary />
        <NewReview />
        <SummonerRecentReviews />
      </div>
    </div>
  );
};

export const SummonerPage = memo(SummonerPageBase);
