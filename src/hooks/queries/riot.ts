import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RIOT_BASE_URI = "https://europe.api.riotgames.com";

const instance = axios.create({
  baseURL: RIOT_BASE_URI,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://europe.api.riotgames.com",
  },
});

export const useGetSummonerIDfromRiotID = ({
  summonerName,
  summonerTag,
}: {
  summonerName: string;
  summonerTag: string;
}) =>
  useQuery({
    queryKey: [
      "get-summoner-id-from-riot-id",
      `${summonerName}-${summonerTag}`,
    ],
    queryFn: async () => {
      const req = await instance.get(
        `${RIOT_BASE_URI}/riot/account/v1/accounts/by-riot-id/${summonerName}/${summonerTag}?api_key=${
          import.meta.env.VITE_RIOT_API_KEY
        }`
      );
      return req;
    },
  });
