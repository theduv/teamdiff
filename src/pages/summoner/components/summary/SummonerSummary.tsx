import { memo, useContext } from "react";
import { Link } from "wouter";

import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../components/StarRating/StarRating";

const SummonerSummaryBase = () => {
  const { summoner } = useContext(SummonerPageContext);

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
          <StarRating
            rating={!!summoner.globalGrade ? summoner.globalGrade : 0}
            size="big"
          />
          <h2 className="text-2xl font-bold text-gray-500 self-end">
            {summoner.globalGrade}
          </h2>
        </div>
      </div>
      {summoner.championGrades.map((review) => (
        <div className="flex space-x-4 items-center" key={review.championID}>
          <img
            src={getChampionIconURL(review.championID)}
            height={80}
            width={80}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <StarRating rating={review.grade} />
            <span className="self-end text-gray-300 font-bold">
              {review.grade}
            </span>
          </div>
        </div>
      ))}
      {summoner.championGrades.length > 3 && (
        <Link href={`/summoner/${summoner.name}-${summoner.id}/more`}>
          <span>+ see more...</span>
        </Link>
      )}
    </div>
  );
};

export const SummonerSummary = memo(SummonerSummaryBase);
