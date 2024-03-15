import { ChangeEvent, KeyboardEvent, memo } from "react";
import { noop } from "lodash";
import clsx from "clsx";

type TextInputBase = {
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  placeholderPosition?: "top" | "left";
  label?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const TextInputBase = ({
  placeholder = "",
  placeholderPosition = "left",
  label = "",
  value,
  onChangeValue,
  onKeyDown = noop,
}: TextInputBase) => {
  return (
    <label
      className={clsx("flex items-center text-gray-500", {
        "space-x-4": placeholderPosition === "left",
        "flex-col space-y-1": placeholderPosition === "top",
      })}
    >
      {!!label && <h2>{label}</h2>}
      <input
        onKeyDown={onKeyDown}
        className="px-4 py-2 rounded-lg"
        value={value}
        onChange={onChangeValue}
        placeholder={placeholder}
      />
    </label>
  );
};
export const TextInput = memo(TextInputBase);
