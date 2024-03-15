import clsx from "clsx";
import { memo } from "react";
import { BsChatLeft } from "react-icons/bs";
import { LiaBrainSolid } from "react-icons/lia";
import { LuSwords } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { noop } from "lodash";

import { BADGE_NAME } from "../../../../hooks/enums/lib";
import { BADGE_LABEL } from "../../../../hooks/enums/lib";

type BadgeProps = {
  element: BADGE_NAME;
  onClick?: () => void;
  disabled?: boolean;
  isSelected?: boolean;
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

const BadgeBase = ({
  element,
  disabled = false,
  onClick = noop,
  isSelected = false,
}: BadgeProps) => (
  <>
    <button
      data-tooltip-id={element}
      data-tooltip-content={BADGE_LABEL[element]}
      className={clsx("rounded-full p-2", {
        "border border-1 border-gray-900": !disabled,
        "bg-yellow-300": isSelected && !disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {getBadgeIcon(element)}
    </button>
    <Tooltip id={element} />
  </>
);

export const Badge = memo(BadgeBase);
