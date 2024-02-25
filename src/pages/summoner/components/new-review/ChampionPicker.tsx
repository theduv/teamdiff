import { ChangeEvent, Dispatch, SetStateAction, memo, useState } from "react";

import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { CHAMPION_ID } from "../../../../enums/lib";

type ChampionPickerProps = {
  value: CHAMPION_ID;
  setValue: Dispatch<SetStateAction<CHAMPION_ID>>;
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

  const handleClickChampion = (championID: CHAMPION_ID) => {
    setValue(championID);
    setIsPickerOpen(false);
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
        <div className="absolute h-[300px] w-[300px] bg-gray-600 flex flex-col rounded-md p-2 space-y-3">
          <label className="flex space-x-4 items-center">
            <h4 className="text-gray-300">Champion:</h4>
            <input
              value={searchValue}
              onChange={handleChangeSearchValue}
              className="rounded-md p-1"
              placeholder="Aatrox"
            />
          </label>
          <div className="grid grid-cols-9 overflow-y-auto h-full content-start">
            {Object.values(CHAMPION_ID)
              .filter(
                (championID) =>
                  searchValue === "" ||
                  championID
                    .toLocaleLowerCase()
                    .includes(
                      searchValue
                        .replaceAll(" ", "")
                        .replaceAll("'", "")
                        .toLowerCase()
                    )
              )
              .map((championID) => (
                <button onClick={() => handleClickChampion(championID)}>
                  <img
                    src={getChampionIconURL(championID)}
                    width={30}
                    height={30}
                  />
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const ChampionPicker = memo(ChampionPickerBase);
