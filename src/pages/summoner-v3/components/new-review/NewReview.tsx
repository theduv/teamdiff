import { ChangeEvent, memo, useContext, useState } from "react";

import { BadgesSelector } from "./BadgesSelector";
import { IoSend } from "react-icons/io5";
import { BADGE_NAME, CHAMPION_ID } from "../../../../hooks/enums/lib";
import { StarRating } from "../../../../components/StarRating/StarRating";
import { ModalRecentMatches } from "./ModalRecentMatches";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";

const SEND_BUTTON_ICON = 24;

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

  const changeRatingHandler = (rating: number) => {
    setRatingValue(rating);
  };

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <div className="flex flex-col bg-blue-100 rounded-lg text-primary">
      <div className="flex px-4 py-2 justify-between items-center">
        <div className="flex flex-col">
          <StarRating
            onChangeRating={changeRatingHandler}
            rating={ratingValue}
          />
        </div>
        {matchValue && (
          <div className="flex justify-center">
            <div className="flex space-x-4 items-center py-1 px-6 rounded-lg ">
              <img
                className="rounded-full"
                src={getChampionIconURL(matchValue.champion)}
                width={32}
                height={32}
              />
              <span className="text-xl">
                Reviewing <span className="font-bold">{summoner?.name}</span> as{" "}
                {matchValue.champion}
              </span>
            </div>
          </div>
        )}
        <div className="flex space-x-2 items-center">
          <BadgesSelector value={badgesValue} setValue={setBadgesValue} />
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-secondary rounded-md px-4 py-2 bg-primary font-bold"
          >
            {matchValue ? "CHANGE MATCH" : "PICK A MATCH"}
          </button>
        </div>
      </div>
      <div className="relative w-full">
        <textarea
          value={textValue}
          onChange={onChangeTextArea}
          className="bg-blue-50 min-h-[100px] h-full w-full resize-none outline-none rounded-b-lg border-t border-t-gray-900 placeholder:text-primary items-center px-4 py-2"
          placeholder="Add a message to your grade"
        />
        <button className="absolute right-4 bottom-4 text-primary">
          <IoSend size={SEND_BUTTON_ICON} />
        </button>
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
