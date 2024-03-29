import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";

import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { CHAMPION_ID } from "../../../../hooks/enums/lib";
import { TextInput } from "../../../../components/TextInput/TextInput";

type ChampionPickerProps = {
  value: CHAMPION_ID;
  setValue: Dispatch<SetStateAction<CHAMPION_ID>>;
};

const ChampionPickerBase = ({ value, setValue }: ChampionPickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const pickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setIsPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pickerRef]);

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
    <div className="flex">
      <button onClick={toggleOpenPicker}>
        <img
          src={getChampionIconURL(value)}
          width={30}
          height={30}
          className="rounded-full"
        />
      </button>
      {isPickerOpen && (
        <div
          ref={pickerRef}
          className="absolute h-[300px] w-[300px] bg-gray-600 flex flex-col rounded-md p-2 space-y-3"
        >
          <label className="flex space-x-4 items-center">
            <h4 className="text-gray-300">Champion:</h4>
            <TextInput
              value={searchValue}
              onChangeValue={handleChangeSearchValue}
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

export default memo(ChampionPickerBase);
