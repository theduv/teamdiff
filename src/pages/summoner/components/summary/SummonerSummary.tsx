import { memo, useContext } from "react";
import { FaStar } from "react-icons/fa";

import BadgesZone from "./badges-zone/BadgesZone";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { BestChamps } from "./best-champs/BestChamps";
import { STAR_COLOR } from "../../../../lib/constants/lib";
import { useGetRiotSummonerByPUUID } from "../../../../hooks/queries/summoner";
import { getSummonerIconURL } from "../../../../lib/functions/getSummonerIconURL";

const SUMMONER_ICON_SIZE = 102;

const SummonerSummaryBase = () => {
  const { summoner } = useContext(SummonerPageContext);
  const { data: riotSummoner } = useGetRiotSummonerByPUUID(summoner?.PUUID);

  if (!summoner || !riotSummoner) return null;

  const firstThreeGrades = [...(summoner.championGrades ?? [])];
  firstThreeGrades.splice(3);

  return (
    <div className="flex justify-between flex-col md:flex-row md:space-x-2 sm:space-x-0 w-full rounded-lg text-primary">
      <div className="flex flex-col p-2 rounded-lg bg-gray-100 w-full space-y-2 py-3 px-3">
        <BadgesZone />
        <div className="flex space-x-2 border-2 bg-gradient-to-b from-gray-300 to-gray-100 border-b-0 border-l-0 rounded-tr-lg border-primary">
          <div className="flex flex-col space-y-1">
            <div className="flex flex-col space-x-2 h-full">
              <div className="relative">
                <img
                  src={getSummonerIconURL(riotSummoner.profileIconId)}
                  width={SUMMONER_ICON_SIZE}
                  height={SUMMONER_ICON_SIZE}
                  className="border-4 border-primary h-full max-w-fit"
                />
                {summoner.globalGrade && (
                  <div className="flex items-center bottom-0 justify-center w-full absolute rounded-t-lg">
                    <div className="flex space-x-1 items-center justify-center px-2 py-[2px] bg-black rounded-t-lg">
                      <FaStar color={STAR_COLOR} size={12} />
                      <h2 className="text-sm font-bold text-secondary">
                        {summoner.globalGrade}
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full justify-start">
            <span className="text-2xl font-bold">
              {summoner.name}#{summoner.tag}
            </span>
            <span className="text-primary italic">
              {!!summoner.description ? summoner.description : ""}
            </span>
          </div>
        </div>
      </div>
      <BestChamps />
    </div>
  );
};

export default memo(SummonerSummaryBase);
