import { Dispatch, SetStateAction, memo } from "react";

import { Badge } from "./Badge";
import { BADGE_NAME } from "../../../../hooks/enums/lib";

type BadgesSelectorProps = {
  value: BADGE_NAME[];
  setValue: Dispatch<SetStateAction<BADGE_NAME[]>>;
};

const BadgesSelectorBase = ({ value, setValue }: BadgesSelectorProps) => {
  const onClickHandler = (badge: BADGE_NAME) => {
    setValue((oldBadges) =>
      oldBadges.includes(badge)
        ? oldBadges.filter((currentBadge) => currentBadge !== badge)
        : [...oldBadges, badge]
    );
  };

  return (
    <div className="flex space-x-1 items-center">
      {Object.values(BADGE_NAME).map((badgeName) => (
        <Badge
          key={`badge-${badgeName}`}
          element={badgeName}
          isSelected={value.includes(badgeName)}
          onClick={() => {
            onClickHandler(badgeName);
          }}
        />
      ))}
    </div>
  );
};

export const BadgesSelector = memo(BadgesSelectorBase);
