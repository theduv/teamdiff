import { memo, useContext } from "react";

import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { StarRating } from "../../../../components/StarRating/StarRating";

const SUMMONER_ICON_SIZE = 130;

const SummonerSummaryBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner) return null;

  const firstThreeGrades = [...summoner.championGrades];
  firstThreeGrades.splice(3);

  return (
    <div className="flex space-y-8 self-start bg-gray-900 rounded-t-md py-2 px-4 w-full ">
      <div className="flex flex-col space-y-2 ">
        <div className="flex items-center space-x-8 ">
          <img
            src={summoner.iconURL}
            width={SUMMONER_ICON_SIZE}
            height={SUMMONER_ICON_SIZE}
            className="rounded-3xl"
          />
          <div className="flex flex-col space-y-3">
            <span className="text-gray-300 text-2xl font-bold">
              {summoner.name}#{summoner.tag}
            </span>
            <div className="flex space-x-2">
              <StarRating
                rating={!!summoner.globalGrade ? summoner.globalGrade : 0}
                size="small"
              />
              <h2 className="text-2xl font-bold text-gray-500">
                {summoner.globalGrade}
              </h2>
            </div>
            <span className="text-gray-200 overflow-auto w-[600px] overflow italic">
              {!!summoner.description ? summoner.description : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SummonerSummary = memo(SummonerSummaryBase);
