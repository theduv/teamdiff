export type Champion = {
  name: string;
  iconURL: string;
};

export type IndividualGrade = {
  author: SummonerView;
  gameID: string;
  grade: number;
  champion: Champion;
  comment: string;
};

export type ChampionGrade = {
  name: string;
  iconURL: string;
  grade: string;
  individualGrades: IndividualGrade[];
};

export type SummonerView = {
  id: string;
  name: string;
  tag: string;
  globalGrade: number;
  championsGrades: ChampionGrade[];
};
