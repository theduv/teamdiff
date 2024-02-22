import { getChampionIconURL } from "../lib/functions/getChampionIconURL";
import { IndividualGrade } from "../types/lib";
import { MOCK_SUMMONERS } from "./summoners";

export const MOCK_GRADES: IndividualGrade[] = [
  {
    author: MOCK_SUMMONERS[0],
    reciever: MOCK_SUMMONERS[1],
    gameID: "010101",
    grade: 2,
    champion: {
      name: "Corki",
      id: "Corki",
      iconURL: getChampionIconURL("Corki"),
    },
    comment: "Super trop fort ton Corki !!",
  },
];
