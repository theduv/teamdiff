import { memo, useContext } from "react";
import { Link } from "wouter";
import { AuthContext } from "../../contexts/Auth";
import { useGetRiotSummonerByPUUID } from "../../hooks/queries/summoner";
import { getSummonerIconURL } from "../../lib/functions/getSummonerIconURL";

const HeaderBase = () => {
  const auth = useContext(AuthContext);
  const { data: riotSummoner } = useGetRiotSummonerByPUUID(
    auth.summoner?.PUUID
  );

  return (
    <div className="flex w-full px-2 py-4 bg-secondary justify-between items-center">
      <Link href="/">
        <h1 className="font-semibold text-3xl italic">CheckM8</h1>
      </Link>
      {riotSummoner && auth.summoner && (
        <div className="flex items-center space-x-2">
          <h2 className="text-xl">
            {auth.summoner.name}#{auth.summoner.tag}
          </h2>
          <img
            src={getSummonerIconURL(riotSummoner.profileIconId)}
            className="rounded-full h-12 w-12"
          />
        </div>
      )}
    </div>
  );
};

export default memo(HeaderBase);
