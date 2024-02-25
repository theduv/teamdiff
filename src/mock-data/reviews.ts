import { CHAMPION_ID } from "../enums/lib";
import { Review } from "../types/lib";
import { MOCK_REVIEWS_IDS, MOCK_SUMMONER_IDS } from "./ids";

export const MOCK_REVIEWS: Review[] = [
  {
    id: MOCK_REVIEWS_IDS[0],
    authorID: MOCK_SUMMONER_IDS[1],
    recieverID: MOCK_SUMMONER_IDS[0],
    gameID: "010101",
    grade: 4,
    champion: {
      name: "Corki",
      id: CHAMPION_ID.CORKI,
    },
    comment:
      "Super trop fort ton Corki !! Tu peux m'épouser stp ? Comme ça on fait des bébés on vit ensemble etc etc",
  },
  {
    id: MOCK_REVIEWS_IDS[1],
    authorID: MOCK_SUMMONER_IDS[1],
    recieverID: MOCK_SUMMONER_IDS[0],
    gameID: "02",
    grade: 2,
    champion: {
      name: "Vladimir",
      id: CHAMPION_ID.VLADIMIR,
    },
    comment:
      "Je t'aime beaucoup hein... mais ton vieux Vladimir là plus jamais.",
  },
  {
    id: MOCK_REVIEWS_IDS[2],
    authorID: MOCK_SUMMONER_IDS[1],
    recieverID: MOCK_SUMMONER_IDS[0],
    gameID: "03",
    grade: 5,
    champion: {
      name: "Zac",
      id: CHAMPION_ID.ZAC,
    },
    comment:
      "OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!! OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!! OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!! OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!! OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!!",
  },
];
