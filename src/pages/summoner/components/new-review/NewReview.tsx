import { ChangeEvent, memo, useState } from "react";

import { BadgesSelector } from "./BadgesSelector";
// import { ChampionPicker } from "./ChampionPicker";
import { BADGE_NAME, CHAMPION_ID } from "../../../../enums/lib";
import { StarRating } from "../../../../components/StarRating/StarRating";
import { Modal } from "../../../../components/Modal/Modal";
import { ModalRecentGames } from "./ModalRecentGames";

const NewReviewBase = () => {
  const [textValue, setTextValue] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [badgesValue, setBadgesValue] = useState<BADGE_NAME[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gamePicker, setGamePicker] = useState<string | null>(null);
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
      <div className="bg-gray-500 flex-1 flex rounded-t-2xl px-4 py-2 justify-between">
        <StarRating onChangeRating={changeRatingHandler} rating={ratingValue} />
        <div className="flex space-x-2 items-center">
          <BadgesSelector value={badgesValue} setValue={setBadgesValue} />
          <button onClick={() => setIsModalOpen(true)}>PICK A GAME</button>
          {/* <ChampionPicker value={championValue} setValue={setChampionValue} /> */}
        </div>
      </div>
      <textarea
        value={textValue}
        onChange={onChangeTextArea}
        className="bg-gray-900 border border-1 resize-none border-gray-600 outline-none text-gray-200 rounded-b-xl placeholder:text-gray-200 items-center flex justify-center px-4 py-2"
        placeholder="Add a message to your grade"
      />
      <ModalRecentGames
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export const NewReview = memo(NewReviewBase);
