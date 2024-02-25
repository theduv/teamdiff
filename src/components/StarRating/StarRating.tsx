import { memo } from "react";
import StarRatings from "react-star-ratings";

type StarRatingProps = {
  size?: "small" | "big";
  onChangeRating?: (rating: number) => void;
  rating: number;
};

const StarRatingBase = ({
  size = "small",
  rating,
  onChangeRating = undefined,
}: StarRatingProps) => {
  return (
    <StarRatings
      starDimension={size === "small" ? "30" : "48"}
      starRatedColor="#FFA500"
      starHoverColor="#FFA500"
      starSpacing="0px"
      rating={rating}
      changeRating={onChangeRating}
      numberOfStars={5}
    />
  );
};

export const StarRating = memo(StarRatingBase);
