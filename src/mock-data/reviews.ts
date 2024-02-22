import { getChampionIconURL } from "../lib/functions/getChampionIconURL";
import { IndividualReview } from "../types/lib";
import { MOCK_SUMMONER_IDS } from "./id";

export const MOCK_REVIEWS: IndividualReview[] = [
  {
    authorID: MOCK_SUMMONER_IDS[1],
    recieverID: MOCK_SUMMONER_IDS[0],
    gameID: "010101",
    grade: 4,
    champion: {
      name: "Corki",
      id: "Corki",
      iconURL: getChampionIconURL("Corki"),
    },
    comment:
      "Super trop fort ton Corki !! Tu peux m'épouser stp ? Comme ça on fait des bébés on vit ensemble etc etc",
  },
];
