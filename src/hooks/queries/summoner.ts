import { useQuery } from "@tanstack/react-query";
import { MOCK_SUMMONERS } from "../../mock-data/summoners";
import axios from "axios";
import { GetSummonerByPUUIDResponse } from "../../lib/types/riot-api";

export const useGetRiotSummonerByPUUID = (puuid: string | undefined | null) =>
  useQuery({
    queryKey: ["summoner-riot-puuid", puuid],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/riot/summoner/${puuid}`
      );
      return res.data as GetSummonerByPUUIDResponse;
    },
  });

export const useSummonerByName = (summonerName: string, summonerTag: string) =>
  useQuery({
    queryKey: ["summoner-name", `${summonerName}-${summonerTag}`],
    queryFn: async () => {
      // TODO: call to back to retrieve infos
      let res = null;
      if (import.meta.env.VITE_ENVIRONMENT === "local") {
        res = MOCK_SUMMONERS.find(
          (summoner) =>
            summoner.name.toLocaleLowerCase() ===
              summonerName.toLocaleLowerCase() &&
            summonerTag.toLowerCase() === summoner.tag.toLocaleLowerCase()
        );
        if (!res) {
          const data = await axios.get(
            `${
              import.meta.env.VITE_API_URL
            }/riot/summoner/${summonerName}/${summonerTag}`
          );
          console.log(data);
          return data.data;
        }
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
