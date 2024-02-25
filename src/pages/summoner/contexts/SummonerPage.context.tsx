import { ReactNode, createContext } from "react";
import { IndividualReview, SummonerView } from "../../../types/lib";
import { useSummonerByName } from "../../../hooks/queries/summoner";
import { useGetReviewsByIDs } from "../../../hooks/queries/reviews";

type SummonerPageContextValue = {
  summoner: SummonerView | null | undefined;
  lastReviews: IndividualReview[];
};

export const SummonerPageContext = createContext<SummonerPageContextValue>({
  summoner: null,
  lastReviews: [],
});

type SummonerPageContextProviderProps = {
  summonerName: string;
  summonerTag: string;
  children: ReactNode;
};

export const SummonerPageContextProvider = ({
  summonerName,
  summonerTag,
  children,
}: SummonerPageContextProviderProps) => {
  const { data: summoner } = useSummonerByName(summonerName, summonerTag);
  let lastReviews: IndividualReview[] = [];
  const { data } = useGetReviewsByIDs({
    reviewsIDs: summoner ? summoner.recievedReviewsIDs : [],
  });
  if (data) {
    lastReviews = data;
  }

  const contextValue = { summoner, lastReviews };

  return (
    <SummonerPageContext.Provider value={contextValue}>
      {children}
    </SummonerPageContext.Provider>
  );
};
