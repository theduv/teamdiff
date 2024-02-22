import { SummonerView } from "../types/lib";
import { MOCK_GRADES } from "./grades";
import { MOCK_SUMMONER_IDS } from "./id";
import { MOCK_REVIEWS } from "./reviews";

export const MOCK_SUMMONERS: SummonerView[] = [
  {
    id: MOCK_SUMMONER_IDS[0],
    name: "REDEMPTION",
    iconURL:
      "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt444c81450d32eaac/6217c2428eaa0f5e28b9201d/2022_WKO-Figures_Ornn_ecomm_image_03.jpg",
    tag: "NEO",
    globalGrade: 4.9,
    championGrades: [MOCK_GRADES[0]],
    givenReviews: [],
    recievedReviews: [MOCK_REVIEWS[0]],
  },
  {
    id: MOCK_SUMMONER_IDS[1],
    name: "Anaru",
    tag: "0707",
    iconURL:
      "https://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/588.png",
    globalGrade: 4.5,
    championGrades: [],
    givenReviews: [MOCK_REVIEWS[0]],
    recievedReviews: [],
  },
];
