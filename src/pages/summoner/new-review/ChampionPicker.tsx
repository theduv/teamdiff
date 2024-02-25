import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  memo,
  useState,
} from "react";

import { ChampionsIDs } from "../../../constants/lib";
import { ChampionID } from "../../../types/riot-api";
import { getChampionIconURL } from "../../../lib/functions/getChampionIconURL";

type ChampionPickerProps = {
  value: ChampionID;
  setValue: Dispatch<SetStateAction<ChampionID>>;
};

const ChampionPickerBase = ({ value, setValue }: ChampionPickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const toggleOpenPicker = () => {
    setIsPickerOpen((oldIsOpen) => !oldIsOpen);
  };

  return (
    <div>
      <button onClick={toggleOpenPicker}>
        <img
          src={getChampionIconURL(value)}
          width={30}
          height={30}
          className="rounded-full"
        />
      </button>
      {isPickerOpen && (
        <div className="absolute h-[300px] w-[300px] bg-gray-600 rounded-md p-2 space-y-3">
          <input
            value={searchValue}
            onChange={handleChangeSearchValue}
            className="rounded-md p-1"
            placeholder="Aatrox"
          />
          <div className="grid grid-cols-9 overflow-y-auto">
            {ChampionsIDs.filter(
              (championID) =>
                searchValue === "" ||
                championID.toLocaleLowerCase().includes(searchValue)
            ).map((championID) => (
              <img
                src={getChampionIconURL(championID)}
                width={30}
                height={30}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const ChampionPicker = memo(ChampionPickerBase);
