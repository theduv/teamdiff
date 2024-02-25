import { memo, useContext } from "react";

import { SummonerSummary } from "./components/summary/SummonerSummary";
import { SummonerPageContext } from "./contexts/SummonerPage.context";
import { SummonerRecentReviews } from "./components/recent-reviews/SummonerRecentReviews";
import { NewReview } from "./components/new-review/NewReview";

const SummonerPageBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner) return <div>Error while retrieving this summoner.</div>;

  return (
    <div className="pt-12 flex flex-row p-4 h-full space-x-8">
      <SummonerSummary />
      <div className="h-[90%] bg-gray-400 w-[1px]" />
      <div className="flex flex-col space-y-4">
        <NewReview />
        <SummonerRecentReviews />
      </div>
    </div>
  );
};

export const SummonerPage = memo(SummonerPageBase);
