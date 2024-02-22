import { championID } from "../../types/lib";

export const getChampionIconURL = (championID: championID) => {
  return `https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/${championID}.png`;
};
