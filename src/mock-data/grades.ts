import { getChampionIconURL } from "../lib/functions/getChampionIconURL";
import { ChampionGrade } from "../types/lib";
import { MOCK_REVIEWS } from "./reviews";

export const MOCK_GRADES: ChampionGrade[] = [
  {
    grade: 4.3,
    id: "Corki",
    name: "Corki",
    iconURL: getChampionIconURL("Corki"),
    individualReviews: [MOCK_REVIEWS[0]],
  },
];
