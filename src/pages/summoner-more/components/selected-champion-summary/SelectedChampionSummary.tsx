import { memo, useContext } from "react";

import { SummonerMorePageContext } from "../../contexts/SummonerMorePage.context";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { useGetReviewsByIDs } from "../../../../hooks/queries/reviews";
import { Review } from "../../../summoner/components/recent-reviews/Review";

const CHAMPION_ICON_SIZE = 64;

const SelectedChampionSummaryBase = () => {
  const { selectedChampion, summoner } = useContext(SummonerMorePageContext);
  if (!summoner) return null;
  const reviewsIDs: string[] = [];

  for (let review of summoner?.championGrades.filter(
    (cg) => cg.championID === selectedChampion
  )) {
    reviewsIDs.push(...review.individualReviewsIDs);
  }

  const { data: reviews } = useGetReviewsByIDs({ reviewsIDs });

  if (!selectedChampion || !summoner) return null;

  return (
    <div className="p-4 rounded-lg bg-gray-100 space-y-4">
      <div className="flex flex-col items-center space-y-2">
        <img
          className="rounded-xl"
          width={CHAMPION_ICON_SIZE}
          height={CHAMPION_ICON_SIZE}
          src={getChampionIconURL(selectedChampion)}
        />
        <span>
          {summoner.name}#{summoner.tag} as {selectedChampion}
        </span>
      </div>
      <div className="h-[1px] bg-gray-700 w-full" />
      {reviews?.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};

export const SelectedChampionSummary = memo(SelectedChampionSummaryBase);
