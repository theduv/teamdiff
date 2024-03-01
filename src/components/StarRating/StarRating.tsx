import { memo } from "react";
import StarRatings from "react-star-ratings";

type STAR_RATING_SIZE = "xsmall" | "big" | "small";

type StarRatingProps = {
  size?: STAR_RATING_SIZE;
  onChangeRating?: (rating: number) => void;
  rating: number;
};

const getStarDimension = (size: STAR_RATING_SIZE) => {
  switch (size) {
    case "xsmall":
      return "16";
    case "small":
      return "32";
    case "big":
      return "48";
  }
};

const StarRatingBase = ({
  size = "small",
  rating,
  onChangeRating = undefined,
}: StarRatingProps) => {
  return (
    <StarRatings
      starDimension={getStarDimension(size)}
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
