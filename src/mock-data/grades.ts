import { ChampionGrade } from "../types/lib";
import { MOCK_REVIEWS_IDS } from "./ids";

export const MOCK_GRADES: ChampionGrade[] = [
  {
    grade: 4.3,
    championID: "Corki",
    name: "Corki",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[0]],
  },
  {
    grade: 2.1,
    championID: "Vladimir",
    name: "Vladimir",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[1]],
  },
  {
    grade: 5,
    championID: "Zac",
    name: "Zac",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[2]],
  },
];
