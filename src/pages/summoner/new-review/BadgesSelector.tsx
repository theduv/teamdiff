import { Dispatch, SetStateAction, memo } from "react";
import { BsChatLeft } from "react-icons/bs";
import { LiaBrainSolid } from "react-icons/lia";
import { LuSwords } from "react-icons/lu";

import { BadgeName } from "../../../types/lib";

import { Badge } from "./Badge";

type BadgesSelectorProps = {
  value: BadgeName[];
  setValue: Dispatch<SetStateAction<BadgeName[]>>;
};

const BadgesSelectorBase = ({ value, setValue }: BadgesSelectorProps) => {
  const onClickHadler = (badge: BadgeName) => {
    setValue((oldBadges) =>
      oldBadges.includes(badge)
        ? oldBadges.filter((currentBadge) => currentBadge !== badge)
        : [...oldBadges, badge]
    );
  };

  return (
    <div className="flex space-x-1 items-center">
      <Badge
        icon={<BsChatLeft />}
        onClick={() => {
          onClickHadler("GOOD_COMMUNICATION");
        }}
        isSelected={value.includes("GOOD_COMMUNICATION")}
      />
      <Badge
        icon={<LiaBrainSolid />}
        onClick={() => onClickHadler("GOOD_MACRO")}
        isSelected={value.includes("GOOD_MACRO")}
      />
      <Badge
        icon={<LuSwords />}
        onClick={() => onClickHadler("GOOD_MICRO")}
        isSelected={value.includes("GOOD_MICRO")}
      />
    </div>
  );
};

export const BadgesSelector = memo(BadgesSelectorBase);
