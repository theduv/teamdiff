import { memo } from "react";
import StarRatings from "react-star-ratings";
import { STAR_COLOR, STAR_EMPTY_COLOR } from "../../constants/lib";

type STAR_RATING_SIZE = "xsmall" | "big" | "small";

type StarRatingProps = {
  size?: STAR_RATING_SIZE;
  onChangeRating?: (rating: number) => void;
  rating: number;
};

const getStarDimension = (size: STAR_RATING_SIZE) => {
  switch (size) {
    case "xsmall":
      return "19";
    case "small":
      return "32";
    case "big":
      return "48";
  }
};

const getStarRatingWidth = (size: STAR_RATING_SIZE) => {
  switch (size) {
    case "xsmall":
      return "110px";
    case "small":
      return "170px";
    case "big":
      return "240px";
  }
};

const StarRatingBase = ({
  size = "small",
  rating,
  onChangeRating = undefined,
}: StarRatingProps) => {
  return (
    <div className={`min-w-[${getStarRatingWidth(size)}]`}>
      <StarRatings
        starDimension={getStarDimension(size)}
        starEmptyColor={STAR_EMPTY_COLOR}
        starRatedColor={STAR_COLOR}
        starHoverColor={STAR_COLOR}
        starSpacing="0px"
        rating={rating}
        changeRating={onChangeRating}
        numberOfStars={5}
      />
    </div>
  );
};

export const StarRating = memo(StarRatingBase);
