import { memo, useContext } from "react";

import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { Review } from "./Review";

const SummonerRecentReviewsBase = () => {
  const { lastReviews } = useContext(SummonerPageContext);

  return (
    <div className="flex flex-col space-y-8">
      <span className="text-3xl text-gray-300">Recent reviews</span>
      <div className="overflow-y-auto space-y-4 max-h-[500px]">
        {lastReviews?.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export const SummonerRecentReviews = memo(SummonerRecentReviewsBase);
