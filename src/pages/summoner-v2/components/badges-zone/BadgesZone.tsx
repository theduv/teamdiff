import { memo, useContext } from "react";

import { BADGE_LABEL, BADGE_NAME } from "../../../../enums/lib";
import { Badge } from "../new-review/Badge";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";

const BadgesZoneBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  return (
    <div className="bg-gray-900 pb-8 pl-8 pr-8 pt-4 h-full rounded-md flex flex-col space-y-8 shadow-lg shadow-black min-w-[300px]">
      <div className="flex flex-col space-y-4">
        <span className="text-gray-200 text-3xl text-center">Badges</span>
        <div className="w-full h-[1px] bg-gray-500" />
      </div>
      <div className="flex flex-col space-y-4 h-full justify-center">
        {Object.values(BADGE_NAME).map((badge) => (
          <div className="flex items-center space-x-4">
            <span className="text-gray-200 text-xl">
              {summoner?.badges?.find(
                (currentBadge) => currentBadge.name === badge
              )?.amount ?? 0}
            </span>
            <Badge element={badge} disabled={true} />
            <span className="text-gray-200">{BADGE_LABEL[badge]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BadgesZone = memo(BadgesZoneBase);
