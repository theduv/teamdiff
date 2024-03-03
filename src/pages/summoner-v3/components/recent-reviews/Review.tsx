import { memo } from "react";
import { Link } from "wouter";

import { Review as ReviewType } from "../../../../lib/types/lib";
import {
  useGetRiotSummonerByPUUID,
  useSummonerByID,
} from "../../../../hooks/queries/summoner";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../components/StarRating/StarRating";
import { getSummonerIconURL } from "../../../../lib/functions/getSummonerIconURL";
import clsx from "clsx";

const CHAMPION_ICON_SIZE = 48;
const SUMMONER_ICON_SIZE = 24;

type ReviewProps = {
  review: ReviewType;
};

const ReviewBase = ({ review }: ReviewProps) => {
  const { data: summoner } = useSummonerByID(review.authorID);
  const { data: riotSummoner } = useGetRiotSummonerByPUUID(summoner?.PUUID);

  if (!summoner || !riotSummoner) return null;

  return (
    <div
      className={clsx("flex items-center space-x-4 p-4 rounded-lg w-full", {
        "bg-red-100": !review.hasWon,
        "bg-green-100": review.hasWon,
      })}
    >
      <img
        src={getChampionIconURL(review.champion.id)}
        className="rounded-full"
        width={CHAMPION_ICON_SIZE}
        height={CHAMPION_ICON_SIZE}
      />
      <div className="flex flex-col">
        <Link
          href={`/summoner/${summoner.name}-${summoner.tag}`}
          className="flex space-x-2"
        >
          <img
            src={getSummonerIconURL(riotSummoner.profileIconId)}
            width={SUMMONER_ICON_SIZE}
            height={SUMMONER_ICON_SIZE}
            className="rounded-full max-w-fit"
          />
          <h2 className="font-bold text-lg">
            {summoner.name}#{summoner.tag}
          </h2>
        </Link>
        <div className="flex items-center space-x-2">
          <StarRating rating={review.grade} size={"xsmall"} />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <span>{review.comment}</span>
        </div>
      </div>
    </div>
  );
};

export const Review = memo(ReviewBase);
