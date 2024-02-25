import { ChampionID } from "./riot-api";

export type BadgeName =
  | "GOOD_COMMUNICATION"
  | "GOOD_MACRO"
  | "GOOD_MICRO"
  | "MVP";

export type BadgesAmount = {
  name: BadgeName;
  amount: number;
};

export type Champion = {
  name: string;
  id: ChampionID;
};

export type Review = {
  id: string;
  authorID: string;
  recieverID: string;
  gameID: string;
  grade: number;
  champion: Champion;
  comment: string;
};

export type ChampionGrade = {
  championID: ChampionID;
  name: string;
  grade: number;
  individualReviewsIDs: string[];
};

export type SummonerView = {
  id: string;
  name: string;
  iconURL: string;
  tag: string;
  globalGrade: number | null;
  championGrades: ChampionGrade[];
  givenReviewsIDs: string[];
  recievedReviewsIDs: string[];
  badges: BadgesAmount[];
};
