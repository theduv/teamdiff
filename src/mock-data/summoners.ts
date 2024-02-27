import { SummonerView } from "../types/lib";
import { MOCK_GRADES } from "./grades";
import { MOCK_REVIEWS_IDS, MOCK_SUMMONER_IDS } from "./ids";

export const MOCK_SUMMONERS: SummonerView[] = [
  {
    name: "REDEMPTION",
    puuid:
      "vDb-5V_i7rFBy4Rhd-C2xY4h-OyER5HWzgoQkx2EfuDfJ2uHlTx39IRnQbgf0ZkV9WoJFEGnOerDFQ",
    iconURL:
      "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt444c81450d32eaac/6217c2428eaa0f5e28b9201d/2022_WKO-Figures_Ornn_ecomm_image_03.jpg",
    tag: "NEO",
    globalGrade: 4.9,
    championGrades: [
      MOCK_GRADES[2],
      MOCK_GRADES[0],
      MOCK_GRADES[1],
      MOCK_GRADES[3],
    ],
    givenReviewsIDs: [],
    recievedReviewsIDs: [
      MOCK_REVIEWS_IDS[0],
      MOCK_REVIEWS_IDS[1],
      MOCK_REVIEWS_IDS[2],
    ],
  },
  {
    name: "Anaru",
    puuid:
      "DKJ1EtB6eOxRI0cn1eo5WpRvOtogE5m-y2otMFBJ3iHxjp_iGSR9Lucj-PzYgyxM9bVHBdzC8IAEMg",
    tag: "0707",
    iconURL:
      "https://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/588.png",
    globalGrade: 4.5,
    championGrades: [],
    givenReviewsIDs: [MOCK_REVIEWS_IDS[0]],
    recievedReviewsIDs: [],
  },
  {
    puuid: MOCK_SUMMONER_IDS[0], // summoner with no data
    name: "Ffeur Deux",
    tag: "YOLO",
    iconURL:
      "https://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/0.png",
    globalGrade: null,
    championGrades: [],
    givenReviewsIDs: [],
    recievedReviewsIDs: [],
  },
  {
    puuid: MOCK_SUMMONER_IDS[3], // longest possible name / tag
    name: "16CHARLONGSTRING",
    tag: "4LNG",
    iconURL:
      "https://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/5.png",
    globalGrade: 1.2,
    championGrades: [],
    givenReviewsIDs: [],
    recievedReviewsIDs: [],
  },
];
