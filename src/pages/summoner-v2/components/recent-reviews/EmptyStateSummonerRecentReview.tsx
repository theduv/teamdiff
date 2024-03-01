import { memo } from "react";

const EmptyStateSummonerRecentReviewsBase = () => {
  return (
    <div>
      <span className="italic text-gray-400">
        No review has been found for this summoner.
      </span>
    </div>
  );
};

export const EmptyStateSummonerRecentReviews = memo(
  EmptyStateSummonerRecentReviewsBase
);
