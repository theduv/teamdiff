import { memo, useContext } from "react";

import { Review } from "./Review";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";

const SummonerRecentReviewsBase = () => {
  const { lastReviews } = useContext(SummonerPageContext);

  return (
    <div className="flex flex-col space-y-8 h-full overflow-y-auto w-full items-center">
      <div className="flex flex-col space-y-4">
        <span className="text-3xl text-gray-300">Recent reviews</span>
        <div className="h-[1px] w-full bg-gray-500" />
      </div>
      <div className="overflow-y-auto h-full flex flex-col">
        {!!lastReviews.length ? (
          lastReviews?.map((review) => (
            <Review review={review} key={review.id} />
          ))
        ) : (
          <div className="flex items-center justify-center w-full">
            <span className="italic text-gray-400">
              No review has been found for this summoner.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const SummonerRecentReviews = memo(SummonerRecentReviewsBase);
