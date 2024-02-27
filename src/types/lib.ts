import { BADGE_NAME, CHAMPION_ID } from "../enums/lib";

export type BadgesAmount = {
  name: BADGE_NAME;
  amount: number;
};

export type Game = {
  id: string;
};

export type Champion = {
  name: string;
  id: CHAMPION_ID;
};

export type Review = {
  id: string;
  authorID: string;
  receiverID: string;
  gameID: string;
  grade: number;
  champion: Champion;
  comment: string;
};

export type ChampionGrade = {
  championID: CHAMPION_ID;
  name: string;
  grade: number;
  individualReviewsIDs: string[];
};

export type SummonerView = {
  PUUID: string;
  name: string;
  iconURL: string;
  tag: string;
  globalGrade: number | null;
  championGrades: ChampionGrade[];
  givenReviewsIDs: string[];
  recievedReviewsIDs: string[];
  badges?: BadgesAmount[];
};
