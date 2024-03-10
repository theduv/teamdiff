import { ChangeEvent, memo, useContext, useState } from "react";

import { SummonerMorePageContext } from "../../contexts/SummonerMorePage.context";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { StarRating } from "../../../../components/StarRating/StarRating";
import { CHAMPION_ID } from "../../../../hooks/enums/lib";

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
    <div className="flex flex-col items-center space-y-4 p-4 rounded-lg bg-gray-100">
      <input
        className="rounded-lg py-2 px-4 border border-gray-400"
        value={searchValue}
        onChange={onChangeSearchValue}
        placeholder="Search for a champion"
      />
      <div className="h-[1px] bg-gray-700 w-full" />
      <div className="flex flex-col space-y-2 w-full">
        {summoner?.championGrades
          .filter((grade) =>
            grade.championName.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((championGrade) => (
            <div
              className="flex justify-between space-x-3 w-full cursor-pointer hover:bg-gray-200 p-1 rounded-lg"
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

export const ChampionsList = memo(ChampionsListBase);
