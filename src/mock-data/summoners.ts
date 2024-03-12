import { BADGE_NAME, CHAMPION_ID } from "../hooks/enums/lib";
import { SummonerView } from "../lib/types/lib";
import { MOCK_GRADES } from "./grades";
import { MOCK_REVIEWS_IDS, MOCK_SUMMONER_IDS } from "./ids";

export const MOCK_SUMMONERS: SummonerView[] = [
  {
    name: "REDEMPTION",
    tag: "NEO",
    hasAnAccount: true,
    PUUID:
      "vDb-5V_i7rFBy4Rhd-C2xY4h-OyER5HWzgoQkx2EfuDfJ2uHlTx39IRnQbgf0ZkV9WoJFEGnOerDFQ",
    globalGrade: 4.9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem velit, tempor vitae massa id, tristique imperdiet massa. Cras at purus ac ante tincidunt varius in eu orci. Cras at purus ac ante tincidunt varius in eu orci. Cras at purus ac ante tincidunt varius in eu orci. Cras at purus ac ante tincidunt varius in eu orci. Cras at purus ac ante tincidunt",
    championGrades: [
      MOCK_GRADES[2],
      MOCK_GRADES[0],
      MOCK_GRADES[1],
      MOCK_GRADES[3],
    ],
    badges: [{ name: BADGE_NAME.GOOD_COMMUNICATION, amount: 4 }],
    givenReviewsIDs: [],
    recievedReviewsIDs: [
      MOCK_REVIEWS_IDS[0],
      MOCK_REVIEWS_IDS[1],
      MOCK_REVIEWS_IDS[2],
      MOCK_REVIEWS_IDS[3],
      MOCK_REVIEWS_IDS[4],
    ],
  },
  {
    name: "Anaru",
    hasAnAccount: true,
    PUUID:
      "DKJ1EtB6eOxRI0cn1eo5WpRvOtogE5m-y2otMFBJ3iHxjp_iGSR9Lucj-PzYgyxM9bVHBdzC8IAEMg",
    tag: "0707",
    globalGrade: 4.5,
    description: null,
    badges: [],
    championGrades: [],
    givenReviewsIDs: [MOCK_REVIEWS_IDS[0]],
    recievedReviewsIDs: [],
  },

  {
    PUUID:
      "mgokFezKKl-KEpF9ELWTw3kZ6I8eOwUfRpBbk-LHwSoxsLaV3UrkddteJTpRjFLR7XaX3qJ2QT_Puw",
    hasAnAccount: true,
    name: "Nelien",
    tag: "EUW",
    description: null,
    globalGrade: 4.9,
    championGrades: [],
    badges: [],
    givenReviewsIDs: [],
    recievedReviewsIDs: [],
  },
  {
    PUUID: MOCK_SUMMONER_IDS[0], // summoner with no data
    name: "Ffeur Deux",
    tag: "YOLO",
    description: null,
    hasAnAccount: true,
    globalGrade: null,
    badges: [],
    championGrades: [],
    givenReviewsIDs: [],
    recievedReviewsIDs: [],
  },
  {
    PUUID: MOCK_SUMMONER_IDS[3], // longest possible name / tag
    name: "16CHARLONGSTRING",
    tag: "4LNG",
    description: null,
    hasAnAccount: true,
    globalGrade: 1.2,
    badges: [],
    championGrades: [],
    givenReviewsIDs: [],
    recievedReviewsIDs: [],
  },
  {
    PUUID:
      "bC0iL1DqRsFhxpARhVl81niKQpR25aaz927HznTmkSSoU3B28WOZxyf29c5GfUOVc1lcpF9YrFK3GQ",
    name: "LINAS HABIBI",
    tag: "0601",
    hasAnAccount: true,
    description:
      "RIOT I SWEAR IM NOT SMURFING AND IM JUST GOOD ON TWITCH. PLEASE DON'T BAN TY <3<3",
    globalGrade: 5,
    championGrades: [
      {
        championName: "Twitch",
        championID: CHAMPION_ID.TWITCH,
        grade: 5,
        individualReviewsIDs: [],
      },
      {
        championName: "Evelynn",
        championID: CHAMPION_ID.EVELYNN,
        grade: 5,
        individualReviewsIDs: [],
      },
      {
        championName: "Zac",
        championID: CHAMPION_ID.ZAC,
        grade: 5,
        individualReviewsIDs: [],
      },
    ],
    badges: [
      { name: BADGE_NAME.GOOD_COMMUNICATION, amount: 6 },
      { name: BADGE_NAME.GOOD_MICRO, amount: 6 },
      { name: BADGE_NAME.GOOD_MACRO, amount: 6 },
    ],
    givenReviewsIDs: [],
    recievedReviewsIDs: [],
  },
];
