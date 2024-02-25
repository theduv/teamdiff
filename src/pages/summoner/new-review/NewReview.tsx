import { ChangeEvent, memo, useState } from "react";
import StarRatings from "react-star-ratings";

import { ChampionID } from "../../../types/riot-api";
import { BadgeName } from "../../../types/lib";
import { BadgesSelector } from "./BadgesSelector";
import { ChampionPicker } from "./ChampionPicker";

const NewReviewBase = () => {
  const [textValue, setTextValue] = useState("");
  const [badgesValue, setBadgesValue] = useState<BadgeName[]>([]);
  const [championValue, setChampionValue] = useState<ChampionID>("Aatrox");

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <div className="flex flex-col w-[600px]">
      <div className="bg-gray-500 flex-1 flex rounded-3xl px-4 py-2 justify-between">
        <StarRatings starDimension="30" />
        <div className="flex space-x-2 items-center">
          <BadgesSelector value={badgesValue} setValue={setBadgesValue} />
          <ChampionPicker value={championValue} setValue={setChampionValue} />
        </div>
      </div>
      <textarea
        value={textValue}
        onChange={onChangeTextArea}
        className="bg-gray-900 border border-1 border-gray-600 outline-none text-gray-200 rounded-3xl placeholder:text-gray-200 items-center flex justify-center px-4 py-2"
        placeholder="Add a message to your grade"
      />
    </div>
  );
};

export const NewReview = memo(NewReviewBase);
