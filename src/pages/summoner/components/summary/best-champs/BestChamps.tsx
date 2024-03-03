import { memo, useContext } from "react";
import { Link } from "wouter";
import { FaChevronRight } from "react-icons/fa";

import { SummonerPageContext } from "../../../contexts/SummonerPage.context";
import { getChampionIconURL } from "../../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../../components/StarRating/StarRating";
import clsx from "clsx";

const CHAMPION_ICON_SIZE = 32;

const BestChampsBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner || !summoner.championGrades) return null;

  const firstThreeChamps = [...summoner.championGrades];
  firstThreeChamps.splice(3);

  return (
    <div className="items-center rounded-lg justify-center flex flex-col space-y-8 h-full  ">
      <div className="flex flex-col items-center w-full space-y-1 h-full">
        {!!firstThreeChamps.length ? (
          <>
            {firstThreeChamps.map((champ, index) => (
              <div
                className={clsx(
                  "bg-gray-100 w-full flex items-center text-primary py-1 px-4 space-x-2",
                  {
                    "rounded-t-lg": index === 0 && firstThreeChamps.length > 1,
                    "rounded-b-lg":
                      index === firstThreeChamps.length - 1 &&
                      summoner.championGrades.length < 3,
                    "rounded-lg": index === 0 && firstThreeChamps.length === 1,
                  }
                )}
              >
                <img
                  className="rounded-full border-2 border-black"
                  src={getChampionIconURL(champ.championID)}
                  width={CHAMPION_ICON_SIZE}
                  height={CHAMPION_ICON_SIZE}
                />
                <div className="flex items-centerw-full min-w-[150px] space-x-4">
                  <StarRating rating={champ.grade} size="xsmall" />
                  <span className="font-bold">{champ.grade}</span>
                </div>
              </div>
            ))}
            {summoner.championGrades.length > 3 && (
              <Link
                href={`/summoner/${summoner.name}-${summoner.tag}/more`}
                className="bg-gray-100 px-2 h-full rounded-b-lg w-full text-center text-primary flex items-center justify-center space-x-2"
              >
                <span>see more</span>
                <FaChevronRight size={12} />
              </Link>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center w-full text-center">
            <span className="italic">This summoner has no review yet.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const BestChamps = memo(BestChampsBase);
