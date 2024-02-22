import { memo } from "react";
import { Link } from "wouter";
import StarRatings from "react-star-ratings";

import { IndividualReview } from "../../../../types/lib";
import { useSummonerByID } from "../../../../hooks/queries/summoner";

type ReviewProps = {
  review: IndividualReview;
};

const ReviewBase = ({ review }: ReviewProps) => {
  const { data: summoner } = useSummonerByID(review.authorID);

  if (!summoner) return null;

  return (
    <div className="flex flex-col border rounded-lg p-4 border-gray-600 bg-gray-800 max-w-[900px]">
      <div className="flex space-x-4 items-center">
        <img
          src={summoner.iconURL}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Link href={`/summoner/${summoner.name}-${summoner.tag}`}>
              <h2 className="text-gray-400 font-bold text-3xl">
                {summoner.name}#{summoner.tag}
              </h2>
            </Link>
            <StarRatings
              starRatedColor="#FFA500"
              numberOfStars={5}
              starDimension="30"
              starSpacing="0"
              rating={review.grade}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between ml-24">
        <span className="text-gray-400">{review.comment}</span>
        <img
          src={review.champion.iconURL}
          className="rounded-full"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export const Review = memo(ReviewBase);
