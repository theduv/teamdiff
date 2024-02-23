import { memo, useContext } from "react";

import { SummonerSummary } from "./components/summary/SummonerSummary";
import { SummonerViewContext } from "./contexts/SummonerView.context";
import { SummonerRecentReviews } from "./components/recent-reviews/SummonerRecentReviews";
import { NewReview } from "./new-review/NewReview";
import { useGetSummonerIDfromRiotID } from "../../hooks/queries/riot";

const SummonerViewBase = () => {
  const { summoner } = useContext(SummonerViewContext);
  if (summoner) {
    const res = useGetSummonerIDfromRiotID({
      summonerName: summoner?.name,
      summonerTag: summoner?.tag,
    });
  }

  if (!summoner) return <div>Error while retrieving this summoner.</div>;

  return (
    <div className="pt-12 flex flex-row p-4 h-full space-x-8">
      <SummonerSummary />
      <div className="h-[90%] bg-gray-400 w-[1px]" />
      <div>
        <NewReview />
        <SummonerRecentReviews />
      </div>
    </div>
  );
};

export const SummonerView = memo(SummonerViewBase);
