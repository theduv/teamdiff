import { memo, useContext } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "wouter";

import { SummonerViewContext } from "../../contexts/SummonerView.context";

const SummonerSummaryBase = () => {
  const { summoner } = useContext(SummonerViewContext);

  if (!summoner) return null;

  return (
    <div className="flex flex-col space-y-8 self-start">
      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <img
            src={summoner.iconURL}
            width={170}
            height={170}
            className="rounded-3xl"
          />
          <span className="text-gray-300 text-3xl font-bold">
            {summoner.name}#{summoner.tag}
          </span>
        </div>
        <div className="flex flex-col ">
          <StarRatings
            rating={summoner.globalGrade}
            numberOfStars={5}
            starRatedColor="#FFA500"
            starDimension="48px"
            starSpacing="0"
          />
          <h2 className="text-2xl font-bold text-gray-500 self-end">
            {summoner.globalGrade}
          </h2>
        </div>
      </div>
      {summoner.championGrades.map((review) => (
        <div className="flex space-x-4 items-center">
          <img
            src={review.iconURL}
            height={80}
            width={80}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <StarRatings
              rating={review.grade}
              starRatedColor="#FFA500"
              numberOfStars={5}
              starSpacing="0"
              starDimension="30"
            />
            <span className="self-end text-gray-300 font-bold">
              {review.grade}
            </span>
          </div>
        </div>
      ))}
      {summoner.championGrades.length > 3 && (
        <Link href="/">
          <span>+ see more...</span>
        </Link>
      )}
    </div>
  );
};

export const SummonerSummary = memo(SummonerSummaryBase);
