import { memo } from "react";

import { BADGE_NAME } from "../../../../hooks/enums/lib";
import Badge from "../badge/Badge";

type ReviewBadgesProps = {
  badges: BADGE_NAME[];
};

const ReviewBadgesBase = ({ badges }: ReviewBadgesProps) => {
  console.log({ badges });

  return (
    <div className="flex items-center">
      {badges.map((badge) => (
        <Badge element={badge} key={`badge-${badge}`} disabled />
      ))}
    </div>
  );
};

export default memo(ReviewBadgesBase);
