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
    comment: "Amazing Corki, carried the whole game from early till the end.",
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
    comment: "I like you a lot... but this awful Vladimir, no more again.",
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
      "OMG I WANNA PLAY WITH THIS ZAC ALL THE TIME, HE'S WONDERFUL ON IT !!!! OMG I WANNA PLAY WITH THIS ZAC ALL THE TIME, HE'S WONDERFUL ON IT !!!! OMG I WANNA PLAY WITH THIS ZAC ALL THE TIME, HE'S WONDERFUL ON IT !!!! OMG I WANNA PLAY WITH THIS ZAC ALL THE TIME, HE'S WONDERFUL ON IT !!!! OMG I WANNA PLAY WITH THIS ZAC ALL THE TIME, HE'S WONDERFUL ON IT !!!! OMG I WANNA PLAY WITH THIS ZAC ALL THE TIME, HE'S WONDERFUL ON IT !!!! OMG I WANNA PLAY WITH THIS ZAC ALL THE TIME, HE'S WONDERFUL ON IT !!!! OMG I WANNA PLAY WITH THIS ZAC ALL THE TIME, HE'S WONDERFUL ON IT !!!!",
  },
  {
    id: MOCK_REVIEWS_IDS[3],
    authorUUID:
      "mgokFezKKl-KEpF9ELWTw3kZ6I8eOwUfRpBbk-LHwSoxsLaV3UrkddteJTpRjFLR7XaX3qJ2QT_Puw",
    receiverUUID:
      "vDb-5V_i7rFBy4Rhd-C2xY4h-OyER5HWzgoQkx2EfuDfJ2uHlTx39IRnQbgf0ZkV9WoJFEGnOerDFQ",
    matchID: "04",
    grade: 4,
    gameDuration: 2840,
    badges: [
      BADGE_NAME.GOOD_MACRO,
      BADGE_NAME.GOOD_MICRO,
      BADGE_NAME.GOOD_COMMUNICATION,
    ],
    champion: {
      name: "Evelynn",
      id: CHAMPION_ID.EVELYNN,
    },
    hasWon: true,
    comment: "Decent Evelynn.",
  },
  {
    id: MOCK_REVIEWS_IDS[4],
    authorUUID:
      "bC0iL1DqRsFhxpARhVl81niKQpR25aaz927HznTmkSSoU3B28WOZxyf29c5GfUOVc1lcpF9YrFK3GQ",
    receiverUUID:
      "vDb-5V_i7rFBy4Rhd-C2xY4h-OyER5HWzgoQkx2EfuDfJ2uHlTx39IRnQbgf0ZkV9WoJFEGnOerDFQ",
    matchID: "05",
    grade: 1,
    gameDuration: 2840,
    badges: [],
    champion: {
      name: "Yorick",
      id: CHAMPION_ID.YORICK,
    },
    hasWon: true,
    comment:
      "I've never played with this guy LMAO I just found a bug on this website.",
  },
];
