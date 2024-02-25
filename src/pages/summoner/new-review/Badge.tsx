import clsx from "clsx";
import { memo } from "react";

type BadgeProps = {
  icon: JSX.Element;
  onClick: () => void;
  isSelected: boolean;
};

const BadgeBase = ({ icon, onClick, isSelected }: BadgeProps) => {
  return (
    <button
      className={clsx("rounded-full p-2 border border-1 border-gray-900", {
        "bg-yellow-500": isSelected,
      })}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export const Badge = memo(BadgeBase);
