import { BADGE_NAME, CHAMPION_ID } from "../hooks/enums/lib";
import { Review } from "../lib/types/lib";
import { MOCK_REVIEWS_IDS } from "./ids";

export const MOCK_REVIEWS: Review[] = [
  {
    id: MOCK_REVIEWS_IDS[0],
    authorUUID:
      "DKJ1EtB6eOxRI0cn1eo5WpRvOtogE5m-y2otMFBJ3iHxjp_iGSR9Lucj-PzYgyxM9bVHBdzC8IAEMg",
    receiverUUID:
      "vDb-5V_i7rFBy4Rhd-C2xY4h-OyER5HWzgoQkx2EfuDfJ2uHlTx39IRnQbgf0ZkV9WoJFEGnOerDFQ",
    matchID: "010101",
    grade: 4,
    gameDuration: 2241,
    badges: [],
    champion: {
      name: "Corki",
      id: CHAMPION_ID.CORKI,
    },
    hasWon: true,
    comment:
      "Super trop fort ton Corki !! Tu peux m'épouser stp ? Comme ça on fait des bébés on vit ensemble etc etc",
  },
  {
    id: MOCK_REVIEWS_IDS[1],
    authorUUID:
      "DKJ1EtB6eOxRI0cn1eo5WpRvOtogE5m-y2otMFBJ3iHxjp_iGSR9Lucj-PzYgyxM9bVHBdzC8IAEMg",
    receiverUUID:
      "vDb-5V_i7rFBy4Rhd-C2xY4h-OyER5HWzgoQkx2EfuDfJ2uHlTx39IRnQbgf0ZkV9WoJFEGnOerDFQ",
    matchID: "02",
    grade: 2,
    hasWon: false,
    gameDuration: 2240,
    badges: [BADGE_NAME.GOOD_COMMUNICATION],
    champion: {
      name: "Vladimir",
      id: CHAMPION_ID.VLADIMIR,
    },
    comment:
      "Je t'aime beaucoup hein... mais ton vieux Vladimir là plus jamais.",
  },
  {
    id: MOCK_REVIEWS_IDS[2],
    authorUUID:
      "DKJ1EtB6eOxRI0cn1eo5WpRvOtogE5m-y2otMFBJ3iHxjp_iGSR9Lucj-PzYgyxM9bVHBdzC8IAEMg",
    receiverUUID:
      "vDb-5V_i7rFBy4Rhd-C2xY4h-OyER5HWzgoQkx2EfuDfJ2uHlTx39IRnQbgf0ZkV9WoJFEGnOerDFQ",
    matchID: "03",
    grade: 5,
    gameDuration: 2840,
    badges: [BADGE_NAME.GOOD_MACRO, BADGE_NAME.GOOD_MICRO],
    champion: {
      name: "Zac",
      id: CHAMPION_ID.ZAC,
    },
    hasWon: true,
    comment:
      "OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!! OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!! OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!! OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!! OMG JE VEUX JOUER AVEC CE ZAC TOUS LES JOURS, IL EST EXCEPTIONNEL !!!!",
  },
];
