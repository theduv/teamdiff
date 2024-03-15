import { memo } from "react";

import Badge from "../badge/Badge";

import { BADGE_NAME } from "../../../../hooks/enums/lib";

type ReviewBadgesProps = {
  badges: BADGE_NAME[];
};

const ReviewBadgesBase = ({ badges }: ReviewBadgesProps) => {
  return (
    <div className="flex items-center">
      {badges.map((badge) => (
        <Badge element={badge} key={`badge-${badge}`} disabled />
      ))}
    </div>
  );
};

export default memo(ReviewBadgesBase);
