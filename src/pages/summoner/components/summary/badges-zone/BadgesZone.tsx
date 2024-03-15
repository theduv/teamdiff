import { memo, useContext } from "react";

import Badge from "../../badge/Badge";
import { BADGE_NAME } from "../../../../../hooks/enums/lib";
import { SummonerPageContext } from "../../../contexts/SummonerPage.context";

const BadgesZoneBase = () => {
  const { summoner } = useContext(SummonerPageContext);

  return (
    <div className="flex space-x-8">
      <div className="flex space-x-2 h-full justify-center">
        {Object.values(BADGE_NAME).map((badge) => (
          <div
            key={`badge-${badge}`}
            className="flex items-center space-x-1 rounded-xl py-[1px] px-[8px] text-primary bg-gray-300 "
          >
            <Badge element={badge} disabled={true} />
            <span>
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

export default memo(BadgesZoneBase);
