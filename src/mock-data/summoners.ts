import { SummonerView } from "../types/lib";
import { MOCK_GRADES } from "./grades";

export const MOCK_SUMMONERS: SummonerView[] = [
  {
    id: "000000",
    name: "Speudal",
    iconURL:
      "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt444c81450d32eaac/6217c2428eaa0f5e28b9201d/2022_WKO-Figures_Ornn_ecomm_image_03.jpg",
    tag: "EUW",
    globalGrade: 4.9,
    recievedReviews: [],
    givenReviews: [MOCK_GRADES[0]],
  },
  {
    id: "000001",
    name: "Anaru",
    tag: "0707",
    iconURL: "",
    globalGrade: 4.5,
    recievedReviews: [],
    givenReviews: [],
  },
];
