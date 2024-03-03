import { CHAMPION_ID } from "../../hooks/enums/lib";

export const getChampionIconURL = (championID: CHAMPION_ID) => {
  return `https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/${championID}.png`;
};
