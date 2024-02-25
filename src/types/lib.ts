import { championID } from "./riot-api";

export type Champion = {
  name: string;
  id: championID;
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
  championID: championID;
  name: string;
  grade: number;
  individualReviewsIDs: string[];
};

export type SummonerView = {
  id: string;
  name: string;
  iconURL: string;
  tag: string;
  globalGrade: number;
  championGrades: ChampionGrade[];
  givenReviewsIDs: string[];
  recievedReviewsIDs: string[];
};
