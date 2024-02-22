import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChampionFromRiotApi } from "../../types/lib";

export const useChampions = () =>
  useQuery({
    queryKey: ["champions"],
    queryFn: async () => {
      const req = await axios.get(
        "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json"
      );
      const championsData = req.data.data;
      const parsedData: ChampionFromRiotApi[] = Object.values(
        championsData
      ).map((champion: any) => {
        return champion;
      });

      return parsedData;
    },
  });
