import { CHAMPION_ID } from "../hooks/enums/lib";
import { ChampionGrade } from "../lib/types/lib";
import { MOCK_REVIEWS_IDS } from "./ids";

export const MOCK_GRADES: ChampionGrade[] = [
  {
    grade: 4.3,
    championID: CHAMPION_ID.CORKI,
    championName: "Corki",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[0]],
  },
  {
    grade: 2.1,
    championID: CHAMPION_ID.VLADIMIR,
    championName: "Vladimir",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[1]],
  },
  {
    grade: 5,
    championID: CHAMPION_ID.ZAC,
    championName: "Zac",
    individualReviewsIDs: [MOCK_REVIEWS_IDS[2]],
  },
  {
    grade: 1.2,
    championID: CHAMPION_ID.AMUMU,
    championName: "Amumu",
    individualReviewsIDs: [],
  },
];
