import { memo, useContext } from "react";

import Review from "./Review";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";

const SummonerRecentReviewsBase = () => {
  const { lastReviews } = useContext(SummonerPageContext);

  return (
    <div className="flex flex-col space-y-8 w-full items-center rounded-lg text-primary overflow-y-auto h-full">
      <div className="flex flex-col space-y-2 w-full">
        {!!lastReviews.length ? (
          lastReviews?.map((review) => (
            <Review review={review} key={review.id} />
          ))
        ) : (
          <div className="flex items-center justify-center w-full mt-4">
            <span className="italic text-gray-400">
              No review has been found for this summoner.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(SummonerRecentReviewsBase);
