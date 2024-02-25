export type ChampionID =
  | "Aatrox"
  | "Ahri"
  | "Akali"
  | "Akshan"
  | "Alistar"
  | "Amumu"
  | "Anivia"
  | "Annie"
  | "Aphelios"
  | "Ashe"
  | "AurelionSol"
  | "Azir"
  | "Bard"
  | "Belveth"
  | "Blitzcrank"
  | "Brand"
  | "Braum"
  | "Briar"
  | "Caitlyn"
  | "Camille"
  | "Cassiopeia"
  | "Chogath"
  | "Corki"
  | "Darius"
  | "Diana"
  | "Draven"
  | "DrMundo"
  | "Ekko"
  | "Elise"
  | "Evelynn"
  | "Ezreal"
  | "Fiddlesticks"
  | "Fiora"
  | "Fizz"
  | "Galio"
  | "Gangplank"
  | "Garen"
  | "Gnar"
  | "Gragas"
  | "Graves"
  | "Gwen"
  | "Hecarim"
  | "Heimerdinger"
  | "Hwei"
  | "Illaoi"
  | "Irelia"
  | "Ivern"
  | "Janna"
  | "JarvanIV"
  | "Jax"
  | "Jayce"
  | "Jhin"
  | "Jinx"
  | "Kaisa"
  | "Kalista"
  | "Karma"
  | "Karthus"
  | "Kassadin"
  | "Katarina"
  | "Kayle"
  | "Kayn"
  | "Kennen"
  | "Khazix"
  | "Kindred"
  | "Kled"
  | "KogMaw"
  | "KSante"
  | "Leblanc"
  | "LeeSin"
  | "Leona"
  | "Lillia"
  | "Lissandra"
  | "Lucian"
  | "Lulu"
  | "Lux"
  | "Malphite"
  | "Malzahar"
  | "Maokai"
  | "MasterYi"
  | "Milio"
  | "MissFortune"
  | "MonkeyKing"
  | "Mordekaiser"
  | "Morgana"
  | "Naafiri"
  | "Nami"
  | "Nasus"
  | "Nautilus"
  | "Neeko"
  | "Nidalee"
  | "Nilah"
  | "Nocturne"
  | "Nunu"
  | "Olaf"
  | "Orianna"
  | "Ornn"
  | "Pantheon"
  | "Poppy"
  | "Pyke"
  | "Qiyana"
  | "Quinn"
  | "Rakan"
  | "Rammus"
  | "RekSai"
  | "Rell"
  | "Renata"
  | "Renekton"
  | "Rengar"
  | "Riven"
  | "Rumble"
  | "Ryze"
  | "Samira"
  | "Sejuani"
  | "Senna"
  | "Seraphine"
  | "Sett"
  | "Shaco"
  | "Shen"
  | "Shyvana"
  | "Singed"
  | "Sion"
  | "Sivir"
  | "Skarner"
  | "Smolder"
  | "Sona"
  | "Soraka"
  | "Swain"
  | "Sylas"
  | "Syndra"
  | "TahmKench"
  | "Taliyah"
  | "Talon"
  | "Taric"
  | "Teemo"
  | "Thresh"
  | "Tristana"
  | "Trundle"
  | "Tryndamere"
  | "TwistedFate"
  | "Twitch"
  | "Udyr"
  | "Urgot"
  | "Varus"
  | "Vayne"
  | "Veigar"
  | "Velkoz"
  | "Vex"
  | "Vi"
  | "Viego"
  | "Viktor"
  | "Vladimir"
  | "Volibear"
  | "Warwick"
  | "Xayah"
  | "Xerath"
  | "XinZhao"
  | "Yasuo"
  | "Yone"
  | "Yorick"
  | "Yuumi"
  | "Zac"
  | "Zed"
  | "Zeri"
  | "Ziggs"
  | "Zilean"
  | "Zoe"
  | "Zyra";

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
