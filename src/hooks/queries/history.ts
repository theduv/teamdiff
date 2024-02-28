import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { GameMatch } from "../../types/riot-api";

const BASE_HISTORY_URL = `${import.meta.env.VITE_API_URL}/riot/history`;

export const useGetSameGameHistoryData = (
  srcPUUID: string,
  destPUUID: string
) => {
  return useQuery({
    queryKey: ["same-game", srcPUUID],
    queryFn: async () => {
      const req = await axios.get(
        `${BASE_HISTORY_URL}/common/${srcPUUID}/${destPUUID}`
      );
      return req;
    },
  });
};

export const useGetMatchHistoryData = (matchesIDs: string[]) =>
  useQuery({
    queryKey: ["history-data", matchesIDs],
    queryFn: async () => {
      const res: GameMatch[] = [];
      for (let matchID of matchesIDs) {
        const req = await axios.get(`${BASE_HISTORY_URL}/match/${matchID}`);
        res.push(req.data.res.response.info as GameMatch);
      }
      return res;
    },
  });

export const useGetMatchHistoryIDs = (puuid: string | undefined) =>
  useQuery({
    queryKey: ["history-id", puuid],
    queryFn: async () => {
      if (!puuid) {
        return [];
      }
      const req = await axios.get(`${BASE_HISTORY_URL}/${puuid}`);
      return req.data;
    },
  });
