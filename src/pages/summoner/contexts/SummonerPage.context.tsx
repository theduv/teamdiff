import { ReactNode, createContext } from "react";

import { Review, SummonerView } from "../../../lib/types/lib";
import { useSummonerByName } from "../../../hooks/queries/summoner";
import { useGetReviewsByIDs } from "../../../hooks/queries/reviews";

type SummonerPageContextValue = {
  summoner: SummonerView | null;
  lastReviews: Review[];
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
  let lastReviews: Review[] = [];
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
