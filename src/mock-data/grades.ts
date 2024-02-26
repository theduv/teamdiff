import { CHAMPION_ID } from "../enums/lib";
import { ChampionGrade } from "../types/lib";
import { MOCK_REVIEWS_IDS } from "./ids";

export const MOCK_GRADES: ChampionGrade[] = [
  {
    grade: 4.3,
    championID: CHAMPION_ID.CORKI,
    name: "Corki",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[0]],
  },
  {
    grade: 2.1,
    championID: CHAMPION_ID.VLADIMIR,
    name: "Vladimir",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[1]],
  },
  {
    grade: 5,
    championID: CHAMPION_ID.ZAC,
    name: "Zac",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[2]],
  },
  {
    grade: 1.2,
    championID: CHAMPION_ID.AMUMU,
    name: "Amumu",
    individualReviewsIDs: [],
  },
];
