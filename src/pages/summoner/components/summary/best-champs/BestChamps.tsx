import { memo, useContext } from "react";
import { Link } from "wouter";
import { FaChevronRight } from "react-icons/fa";
import clsx from "clsx";

import StarRating from "../../../../../components/StarRating/StarRating";

import { SummonerPageContext } from "../../../contexts/SummonerPage.context";
import { getChampionIconURL } from "../../../../../lib/functions/getChampionIconURL";
import { ChampionGrade } from "../../../../../lib/types/lib";

const CHAMPION_ICON_SIZE = 32;

const getChampionBoxes = (championGrades: ChampionGrade[]) => {
  const elements = [];

  for (let i = 0; i < 3; i++) {
    if (i < championGrades.length) {
      elements.push(
        <div
          className={clsx(
            "bg-gray-100 w-full flex items-center text-primary py-1 px-4 space-x-2",
            {
              "rounded-t-lg": i === 0,
            }
          )}
        >
          <img
            className="rounded-full border-2 border-black"
            src={getChampionIconURL(championGrades[i].championID)}
            width={CHAMPION_ICON_SIZE}
            height={CHAMPION_ICON_SIZE}
          />
          <div className="flex items-center w-full min-w-[150px] space-x-4">
            <StarRating rating={championGrades[i].grade} size="xsmall" />
            <span className="font-bold">{championGrades[i].grade}</span>
          </div>
        </div>
      );
    } else {
      elements.push(
        <div className="w-full py-1 bg-gray-100">
          <div className="h-[32px]" />
        </div>
      );
    }
  }
  return elements;
};

const BestChampsBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  const championGrades = summoner ? summoner.championGrades : [];

  if (!summoner || !championGrades.length) return null;

  return (
    <div className="items-center rounded-lg justify-center flex flex-col space-y-8 h-full  ">
      <div className="flex flex-col items-center w-full space-y-1 h-full">
        {!!championGrades.length ? (
          getChampionBoxes(championGrades)
        ) : (
          <div className="flex items-center justify-center w-full text-center">
            <span className="italic">This summoner has no review yet.</span>
          </div>
        )}
        <Link
          href={`/summoner/${summoner.name}-${summoner.tag}/more`}
          className="bg-gray-100 px-2 h-full rounded-b-lg w-full text-center text-primary flex items-center justify-center space-x-2"
        >
          <span>see more</span>
          <FaChevronRight size={12} />
        </Link>
      </div>
    </div>
  );
};

export const BestChamps = memo(BestChampsBase);
