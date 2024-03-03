import { BADGE_NAME, CHAMPION_ID } from "../../hooks/enums/lib";

export type BadgesAmount = {
  name: BADGE_NAME;
  amount: number;
};

export type Match = {
  id: string;
};

export type Champion = {
  name: string;
  id: CHAMPION_ID;
};

export type Review = {
  id: string;
  authorUUID: string;
  receiverUUID: string;
  badges: BADGE_NAME[];
  matchID: string;
  grade: number;
  champion: Champion;
  comment: string;
  hasWon: boolean;
};

export type ChampionGrade = {
  championID: CHAMPION_ID;
  championName: string;
  grade: number;
  individualReviewsIDs: string[];
};

export type SummonerView = {
  PUUID: string;
  hasAnAccount: boolean;
  name: string;
  tag: string;
  description?: string;
  globalGrade?: number | null;
  championGrades?: ChampionGrade[];
  givenReviewsIDs?: string[];
  recievedReviewsIDs?: string[];
  badges?: BadgesAmount[];
};
