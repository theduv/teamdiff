import { useMutation } from "@tanstack/react-query";

import { Review } from "../../lib/types/lib";
import { MOCK_REVIEWS } from "../../mock-data/reviews";

const getReviewsBestChamps = ({ reviewsIDs }: { reviewsIDs: string[] }) =>
  useMutation({
    mutationFn: async () => {
      let res: Review[] = [];
      if (import.meta.env.VITE_ENVIRONMENT === "local") {
        res = MOCK_REVIEWS.filter((review) => reviewsIDs.includes(review.id));
      }
      return res;
    },
  });
