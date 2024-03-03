import { ChangeEvent, memo, useContext, useState } from "react";

import { BadgesSelector } from "./BadgesSelector";
// import { ChampionPicker } from "./ChampionPicker";
import { BADGE_NAME, CHAMPION_ID } from "../../../../hooks/enums/lib";
import { StarRating } from "../../../../components/StarRating/StarRating";
import { ModalRecentMatches } from "./ModalRecentMatches";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";

const NewReviewBase = () => {
  const { summoner } = useContext(SummonerPageContext);
  const [textValue, setTextValue] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [badgesValue, setBadgesValue] = useState<BADGE_NAME[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matchValue, setMatchValue] = useState<{
    id: string;
    champion: CHAMPION_ID;
  } | null>(null);
  // const [championValue, setChampionValue] = useState<CHAMPION_ID>(
  //   CHAMPION_ID.AATROX
  // );

  const changeRatingHandler = (rating: number) => {
    setRatingValue(rating);
  };

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <div className="flex flex-col w-full max-w-[900px]">
      {matchValue && (
        <div className="flex justify-center">
          <div className="flex space-x-4 items-center bg-gray-500 py-1 px-6 rounded-t-lg ">
            <img
              className="rounded-full"
              src={getChampionIconURL(matchValue.champion)}
              width={32}
              height={32}
            />
            <span className="text-xl text-gray-200">
              Reviewing <span className="font-bold">{summoner?.name}</span> as{" "}
              {matchValue.champion}
            </span>
          </div>
        </div>
      )}
      <div className="bg-gray-600 flex-1 flex rounded-t-2xl px-4 py-2 justify-between items-center">
        <div className="flex flex-col">
          <StarRating
            onChangeRating={changeRatingHandler}
            rating={ratingValue}
          />
        </div>
        <div className="flex space-x-2 items-center">
          <BadgesSelector value={badgesValue} setValue={setBadgesValue} />
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-200 rounded-md px-4 py-2 bg-gray-900 font-bold"
          >
            {matchValue ? "CHANGE MATCH" : "PICK A MATCH"}
          </button>
          {/* <ChampionPicker value={championValue} setValue={setChampionValue} /> */}
        </div>
      </div>
      <div>
        <textarea
          value={textValue}
          onChange={onChangeTextArea}
          className="bg-gray-900 border border-1 resize-none border-gray-600 outline-none text-gray-200 rounded-b-xl placeholder:text-gray-200 items-center flex justify-center px-4 py-2"
          placeholder="Add a message to your grade"
        />
      </div>
      <ModalRecentMatches
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        setMatchValue={setMatchValue}
      />
    </div>
  );
};

export const NewReview = memo(NewReviewBase);
