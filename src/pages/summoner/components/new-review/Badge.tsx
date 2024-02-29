import clsx from "clsx";
import { memo } from "react";
import { BsChatLeft } from "react-icons/bs";
import { LiaBrainSolid } from "react-icons/lia";
import { LuSwords } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

import { BADGE_NAME } from "../../../../enums/lib";
import { BADGE_TOOLTIPS } from "./BadgeTooltips";

type BadgeProps = {
  element: BADGE_NAME;
  onClick: () => void;
  isSelected: boolean;
};

const getBadgeIcon = (element: BADGE_NAME) => {
  switch (element) {
    case BADGE_NAME.GOOD_COMMUNICATION:
      return <BsChatLeft />;
    case BADGE_NAME.GOOD_MACRO:
      return <LiaBrainSolid />;
    case BADGE_NAME.GOOD_MICRO:
      return <LuSwords />;
  }
};

const BadgeBase = ({ element, onClick, isSelected }: BadgeProps) => (
  <>
    <button
      data-tooltip-id={element}
      data-tooltip-content={BADGE_TOOLTIPS[element]}
      className={clsx("rounded-full p-2 border border-1 border-gray-900", {
        "bg-yellow-500": isSelected,
        "bg-gray-300": !isSelected,
      })}
      onClick={onClick}
    >
      {getBadgeIcon(element)}
    </button>
    <Tooltip id={element} />
  </>
);

export const Badge = memo(BadgeBase);
