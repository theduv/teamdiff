import { memo } from "react";
import { Link } from "wouter";
import clsx from "clsx";
import duration from "dayjs/plugin/duration";
import dayjs from "dayjs";

import { Review as ReviewType } from "../../../../lib/types/lib";
import {
  useGetRiotSummonerByPUUID,
  useSummonerByID,
} from "../../../../hooks/queries/summoner";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../components/StarRating/StarRating";
import { getSummonerIconURL } from "../../../../lib/functions/getSummonerIconURL";
import { ReviewBadges } from "./ReviewBadges";

const CHAMPION_ICON_SIZE = 48;
const SUMMONER_ICON_SIZE = 24;

dayjs.extend(duration);

type ReviewProps = {
  review: ReviewType;
};

const ReviewBase = ({ review }: ReviewProps) => {
  const { data: summoner } = useSummonerByID(review.authorUUID);
  const { data: riotSummoner } = useGetRiotSummonerByPUUID(summoner?.PUUID);

  if (!summoner || !riotSummoner) return null;

  return (
    <div className="flex">
      <div
        className={clsx("flex rounded-lg w-full space-x-3", {
          "bg-red-100": !review.hasWon,
          "bg-green-100": review.hasWon,
        })}
      >
        <div
          className={clsx("h-full w-3 rounded-l-lg", {
            "bg-red-300": !review.hasWon,
            "bg-green-300": review.hasWon,
          })}
        />
        <div className="flex flex-col justify-center space-y-1 items-center h-full min-w-[40px]">
          <h5
            className={clsx("text-primary font-bold text-xs", {
              "text-green-700": review.hasWon,
              "text-red-700": !review.hasWon,
            })}
          >
            {review.hasWon ? "Victory" : "Defeat"}
          </h5>
          <div className="w-full h-[1px] bg-gray-400" />
          <h5 className="text-xs text-primary">
            {dayjs.duration(review.gameDuration * 1000).format("mm:ss")}
          </h5>
        </div>
        <div className="h-full bg-gray-400 w-[1px]" />
        <div className="flex items-center space-x-4 p-4 w-full">
          <img
            src={getChampionIconURL(review.champion.id)}
            className="rounded-full"
            width={CHAMPION_ICON_SIZE}
            height={CHAMPION_ICON_SIZE}
          />
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Link
                className="flex space-x-2"
                href={`/summoner/${summoner.name}-${summoner.tag}`}
              >
                <img
                  src={getSummonerIconURL(riotSummoner.profileIconId)}
                  width={SUMMONER_ICON_SIZE}
                  height={SUMMONER_ICON_SIZE}
                  className="rounded-full max-w-fit"
                />
                <h2 className="font-bold text-xl">
                  {summoner.name}#{summoner.tag}
                </h2>
              </Link>
              <div className="flex">
                <StarRating rating={review.grade} size={"xsmall"} />
                <ReviewBadges badges={review.badges} />
              </div>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <span>{review.comment}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Review = memo(ReviewBase);
