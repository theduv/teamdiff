import { useQuery } from "@tanstack/react-query";
import { IndividualReview } from "../../types/lib";
import { MOCK_REVIEWS } from "../../mock-data/reviews";

export const useGetReviewsByIDs = ({ reviewsIDs }: { reviewsIDs: string }) =>
  useQuery({
    queryKey: ["reviews", reviewsIDs],
    queryFn: async () => {
      // TODO: call to back to retrieve reviews
      let res: IndividualReview[] = [];
      if (import.meta.env.VITE_ENVIRONMENT === "local") {
        res = MOCK_REVIEWS.filter((review) => reviewsIDs.includes(review.id));
      }
      return res;
    },
  });
