import { memo, useContext } from "react";
import { SummonerMorePageContext } from "../../contexts/SummonerMorePage.context";
import { getSummonerIconURL } from "../../../../lib/functions/getSummonerIconURL";
import { useGetRiotSummonerByPUUID } from "../../../../hooks/queries/summoner";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../components/StarRating/StarRating";

const SUMMONER_ICON_SIZE = 96;
const CHAMPION_ICON_SIZE = 96;

const SummaryBase = () => {
  const { summoner } = useContext(SummonerMorePageContext);
  const { data: summonerFromRiot } = useGetRiotSummonerByPUUID(summoner?.PUUID);

  if (!summoner || !summonerFromRiot) return null;

  return (
    <div className="flex flex-col p-8 space-y-8 justify-center items-center">
      <div className="flex flex-col items-center space-y-2">
        <img
          src={getSummonerIconURL(summonerFromRiot?.profileIconId)}
          width={SUMMONER_ICON_SIZE}
          height={SUMMONER_ICON_SIZE}
        />
        <span className="text-3xl">
          {summoner.name}#{summoner.tag}
        </span>
      </div>
      <input
        className="rounded-lg px-4 py-2"
        placeholder="Search for a champion..."
      />
      {summoner.championGrades ? (
        <div className="flex flex-col space-y-4 justify-center">
          {summoner.championGrades.map((championGrade) => (
            <div className="flex items-center space-x-4 justify-between">
              <img
                src={getChampionIconURL(championGrade.championID)}
                className="rounded-full"
                width={CHAMPION_ICON_SIZE}
                height={CHAMPION_ICON_SIZE}
              />
              <StarRating rating={championGrade.grade} size="big" />
              <span className="text-2xl">{championGrade.grade}</span>
            </div>
          ))}
        </div>
      ) : (
        <span>This user recieved no grade yet.</span>
      )}
    </div>
  );
};

export const Summary = memo(SummaryBase);
