import { ChangeEvent, KeyboardEvent, memo } from "react";
import { noop } from "lodash";

type TextInputBase = {
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const TextInputBase = ({
  placeholder = "",
  label = "",
  value,
  onChangeValue,
  onKeyDown = noop,
}: TextInputBase) => {
  return (
    <label className="flex items-center space-x-4 text-gray-500">
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
