import { memo, useContext } from "react";
import { Link } from "wouter";
import { FaChevronRight } from "react-icons/fa";

import { SummonerPageContext } from "../../../contexts/SummonerPage.context";
import { getChampionIconURL } from "../../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../../components/StarRating/StarRating";

const CHAMPION_ICON_SIZE = 32;

const BestChampsBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner) return null;

  const firstThreeChamps = summoner?.championGrades;
  firstThreeChamps.splice(3);

  return (
    <div className="items-center rounded-lg  justify-center flex flex-col space-y-8 h-full  ">
      <div className="flex flex-col items-center w-full space-y-1 h-full">
        {!!firstThreeChamps.length ? (
          <>
            {firstThreeChamps.map((champ) => (
              <div className="bg-secondary w-full flex items-center border border-primary rounded-md text-primary py-1 px-4">
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
            {summoner.championGrades.length > 2 && (
              <Link
                href={`/summoner`}
                className="bg-secondary px-2 h-full rounded-lg w-full text-center text-primary font-bold flex  items-center justify-center space-x-2"
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
