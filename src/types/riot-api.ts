export type ChampionFromRiotApi = {
  blurb: string;
  id: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    w: number;
    x: number;
    y: number;
  };
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  key: string;
  name: string;
  partype: string;
  stats: {
    armor: number;
    armorperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackrange: number;
    attackspeed: number;
    attackspeedperlevel: number;
    crit: number;
    critperlevel: number;
    hp: number;
    hpperlevel: number;
    hpregen: number;
    hpregenperlevel: number;
    movespeed: number;
    mp: number;
    mpperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
  };
  tags: string[];
  title: string;
  version: string;
};

export type GameMatchInfo = {
  gameCreation: number;
  gameDuration: number;
  gameId: number;
  gameVersion: string;
  participants: Participant[];
  platformId: string;
  queueId: number;
  teams: Team[];
};

export type GameMatch = {
  metadata: {
    dataVersion: string;
    matchId: string;
    participants: string[];
  };
  info: GameMatchInfo;
};

export type Participant = {
  puuid: string;
  championName: string;
  assists: number;
  champExperience: number;
  champLevel: number;
  championId: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  deaths: number;
};

type Team = {
  bans: Ban[];
  objectives: Objectives;
  teamId: number;
  win: boolean;
};

type Ban = {
  championId: number;
  pickTurn: number;
};

type Objectives = {
  baron: ObjectiveDetail;
  champion: ObjectiveDetail;
  dragon: ObjectiveDetail;
};

type ObjectiveDetail = {
  first: boolean;
  kills: number;
};
