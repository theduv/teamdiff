import { memo, useContext } from "react";
import { SummonerPageContext } from "../../../contexts/SummonerPage.context";
import { getChampionIconURL } from "../../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../../components/StarRating/StarRating";
import { Link } from "wouter";

const CHAMPION_ICON_SIZE = 32;

const BestChampsBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner) return null;

  const firstThreeChamps = summoner?.championGrades;
  firstThreeChamps.splice(3);

  return (
    <div className="bg-secondary items-center rounded-lg py-2 px-4 pr-12 justify-center flex flex-col space-y-8 h-full w-[300px]">
      <div className="flex flex-col items-center justify-center space-y-2">
        {!!firstThreeChamps.length ? (
          <>
            {firstThreeChamps.map((champ) => (
              <div className="flex space-x-4 items-center border border-primary rounded-md text-primary py-1 px-4">
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
              <Link href={`/summoner`}>see more...</Link>
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
