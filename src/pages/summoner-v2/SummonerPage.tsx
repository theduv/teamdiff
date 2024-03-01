import { memo, useContext } from "react";

import { SummonerSummary } from "./components/summary/SummonerSummary";
import { SummonerPageContext } from "./contexts/SummonerPage.context";
import { SummonerRecentReviews } from "./components/recent-reviews/SummonerRecentReviews";
import { NewReview } from "./components/new-review/NewReview";
import { BadgesZone } from "./components/badges-zone/BadgesZone";
import { BestChamps } from "./components/best-champs/BestChamps";

const SummonerPageBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner) return <div>Error while retrieving this summoner.</div>;

  return (
    <div className="pt-12 flex flex-col p-4 h-full space-y-8 items-center rounded-md">
      <div className="flex justify-between items-center w-5/6 h-full bg-red-500 max-h-[400px]">
        <BestChamps />
        <div className="bg-gray-500 h-[1px] w-full" />
        <div className="max-w-[900px] shadow-lg shadow-black rounded-b-md h-full bg-cyan-200">
          <SummonerSummary />
          <div className="h-2 bg-gray-800" />
          <NewReview />
        </div>
        <div className="bg-gray-500 h-[1px] w-full" />
        <BadgesZone />
      </div>
      <div className="flex flex-col space-y-4 h-full w-full">
        <SummonerRecentReviews />
      </div>
    </div>
  );
};

export const SummonerPage = memo(SummonerPageBase);
