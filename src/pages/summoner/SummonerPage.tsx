import { memo, useContext } from "react";

import SummonerSummary from "./components/summary/SummonerSummary";
import NewReview from "./components/new-review/NewReview";
import SummonerRecentReviews from "./components/recent-reviews/SummonerRecentReviews";

import { SummonerPageContext } from "./contexts/SummonerPage.context";

const SummonerPageBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner) return <div>Error while retrieving this summoner.</div>;

  return (
    <div className="px-96 h-[100vh] py-4">
      <div className="flex flex-col bg-primary w-full space-y-2 h-full">
        <SummonerSummary />
        <NewReview />
        <SummonerRecentReviews />
      </div>
    </div>
  );
};

export default memo(SummonerPageBase);
