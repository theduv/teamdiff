import { memo, useContext } from "react";

import { BADGE_NAME } from "../../../../../hooks/enums/lib";
import { SummonerPageContext } from "../../../contexts/SummonerPage.context";
import { Badge } from "../../badge/Badge";

const BadgesZoneBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  return (
    <div className="flex space-x-8">
      <div className="flex space-x-2 h-full justify-center">
        {Object.values(BADGE_NAME).map((badge) => (
          <div
            key={`badge-${badge}`}
            className="flex items-center space-x-1 rounded-xl py-[1px] px-[8px] bg-primary"
          >
            <Badge element={badge} disabled={true} />
            <span className="text-gray-200">
              {summoner?.badges?.find(
                (currentBadge) => currentBadge.name === badge
              )?.amount ?? 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BadgesZone = memo(BadgesZoneBase);
