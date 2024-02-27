import { useQuery } from "@tanstack/react-query";
import { MOCK_SUMMONERS } from "../../mock-data/summoners";

export const useSummonerByName = (summonerName: string, summonerTag: string) =>
  useQuery({
    queryKey: ["summoner-name", `${summonerName}-${summonerTag}`],
    queryFn: async () => {
      // TODO: call to back to retrieve infos
      let res = null;
      if (import.meta.env.VITE_ENVIRONMENT === "local") {
        res =
          MOCK_SUMMONERS.find(
            (summoner) =>
              summoner.name.toLocaleLowerCase() ===
                summonerName.toLocaleLowerCase() &&
              summonerTag.toLowerCase() === summoner.tag.toLocaleLowerCase()
          ) ?? null;
      }
      return res;
    },
  });

export const useSummonerByID = (summonerID: string) =>
  useQuery({
    queryKey: ["summoner-id", summonerID],
    queryFn: async () => {
      // TODO: call to back to retrieve infos
      let res = null;
      if (import.meta.env.VITE_ENVIRONMENT === "local") {
        res = MOCK_SUMMONERS.find((summoner) => summoner.PUUID === summonerID);
      }
      return res;
    },
  });
