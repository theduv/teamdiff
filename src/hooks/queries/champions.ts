import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { ChampionFromRiotApi } from "../../types/lib";

const CHAMPIONS_BASE_URL =
  "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json";

export const useChampions = () =>
  useQuery({
    queryKey: ["champions"],
    queryFn: async () => {
      const req = await axios.get(CHAMPIONS_BASE_URL);
      const championsData = req.data.data;
      const parsedData: ChampionFromRiotApi[] = Object.values(
        championsData
      ).map((champion: any) => {
        return champion;
      });

      return parsedData;
    },
  });
