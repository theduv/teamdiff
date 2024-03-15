import { ChangeEvent, memo, useContext, useState } from "react";

import StarRating from "../../../../components/StarRating/StarRating";

import { SummonerMorePageContext } from "../../contexts/SummonerMorePage.context";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { CHAMPION_ID } from "../../../../hooks/enums/lib";
import { TextInput } from "../../../../components/TextInput/TextInput";

const CHAMPION_ICON_SIZE = 32;

const ChampionsListBase = () => {
  const { summoner, setSelectedChampion } = useContext(SummonerMorePageContext);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickChampion = (championID: CHAMPION_ID) => {
    setSelectedChampion(championID);
  };

  return (
    <div className="flex w-full flex-col items-center space-y-4 p-4 rounded-lg bg-gray-100">
      <TextInput
        value={searchValue}
        onChangeValue={onChangeSearchValue}
        label="Search for a champion"
        placeholder="Aatrox"
      />
      <div className="h-[1px] bg-gray-700 w-full" />
      <div className="flex flex-col space-y-2 w-full px-24">
        {summoner?.championGrades
          .filter((grade) =>
            grade.championName.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((championGrade) => (
            <div
              className="flex justify-between space-x-3 w-full cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
              onClick={() => onClickChampion(championGrade.championID)}
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  width={CHAMPION_ICON_SIZE}
                  height={CHAMPION_ICON_SIZE}
                  className="rounded-full"
                  src={getChampionIconURL(championGrade.championID)}
                />
                <span>{championGrade.championName}</span>
              </div>
              <div className="flex items-center space-x-1 col-span-2">
                <StarRating rating={championGrade.grade} />
                <span>{championGrade.grade}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(ChampionsListBase);
