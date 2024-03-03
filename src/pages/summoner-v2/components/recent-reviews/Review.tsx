import { memo } from "react";
import { Link } from "wouter";

import { Review as ReviewType } from "../../../../lib/types/lib";
import { useSummonerByID } from "../../../../hooks/queries/summoner";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../components/StarRating/StarRating";

const CHAMPION_ICON_SIZE = 24;

type ReviewProps = {
  review: ReviewType;
};

const ReviewBase = ({ review }: ReviewProps) => {
  const { data: summoner } = useSummonerByID(review.authorUUID);

  if (!summoner) return null;

  return (
    <div className="flex flex-col rounded-lg p-4 max-w-[900px] space-y-2">
      <div className="flex space-x-4 items-center">
        <img
          src={summoner.iconURL}
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <Link href={`/summoner/${summoner.name}-${summoner.tag}`}>
              <h2 className="text-gray-400 font-bold text-xl">
                {summoner.name}#{summoner.tag}
              </h2>
            </Link>
            <StarRating rating={review.grade} size={"xsmall"} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2">
        <span className="text-gray-400">{review.comment}</span>
        <img
          src={getChampionIconURL(review.champion.id)}
          className="rounded-full"
          width={CHAMPION_ICON_SIZE}
          height={CHAMPION_ICON_SIZE}
        />
      </div>
    </div>
  );
};

export const Review = memo(ReviewBase);
