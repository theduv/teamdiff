import { memo, useContext } from "react";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../components/StarRating/StarRating";

const CHAMPION_ICON_SIZE = 64;

const BestChampsBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  if (!summoner) return null;

  const firstThreeChamps = summoner?.championGrades;
  firstThreeChamps.splice(3);

  return (
    <div className="bg-gray-900 pb-8 pl-8 pr-8 pt-4 rounded-md justify-center flex flex-col space-y-8 shadow-lg shadow-black min-w-[400px] h-full bg-red">
      <div className="flex flex-col space-y-4 items-center h-full">
        <span className="text-gray-200 text-3xl">Best champions</span>
        <div className="h-[1px] w-full bg-gray-500" />
      </div>
      <div className="flex flex-col space-y-2">
        {!!firstThreeChamps.length ? (
          firstThreeChamps.map((champ) => (
            <div className="flex items-center">
              <img
                className="rounded-full"
                src={getChampionIconURL(champ.championID)}
                width={CHAMPION_ICON_SIZE}
                height={CHAMPION_ICON_SIZE}
              />
              <StarRating rating={champ.grade} />
              <span className="text-gray-200">{champ.grade}</span>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full text-center">
            <span className="italic text-gray-400">
              This summoner has no review yet.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const BestChamps = memo(BestChampsBase);
