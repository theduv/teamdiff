import { memo, useContext } from "react";

import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { Review } from "./Review";

const SummonerRecentReviewsBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  return (
    <div className="flex flex-col space-y-8">
      <span className="text-3xl text-gray-300">Recent reviews</span>
      {summoner?.recievedReviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
};

export const SummonerRecentReviews = memo(SummonerRecentReviewsBase);
