import { memo } from "react";
import StarRatings from "react-star-ratings";

const NewReviewBase = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-500 flex-1 rounded-3xl px-4 py-2">
        <StarRatings starDimension="30" />
      </div>
      <textarea
        className="bg-gray-400 rounded-3xl placeholder:text-gray-200 items-center flex justify-center"
        placeholder="Add a message to your grade"
      />
    </div>
  );
};

export const NewReview = memo(NewReviewBase);
