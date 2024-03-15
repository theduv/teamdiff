import { memo, useContext } from "react";
import { Link } from "wouter";
import { MdArrowBackIos } from "react-icons/md";

import { AuthContext } from "../../contexts/Auth";
import { useGetRiotSummonerByPUUID } from "../../hooks/queries/summoner";
import { getSummonerIconURL } from "../../lib/functions/getSummonerIconURL";

const HeaderBase = () => {
  const auth = useContext(AuthContext);

  const onClickArrow = () => {
    window.history.back();
  };

  const { data: riotSummoner } = useGetRiotSummonerByPUUID(
    auth.summoner?.PUUID
  );

  return (
    <div className="flex sticky top-0 z-50 h-[80px] w-full px-2 py-4 bg-secondary justify-between items-center">
      <div className="flex items-center space-x-2">
        <button onClick={onClickArrow}>
          <MdArrowBackIos size={24} />
        </button>
        <Link href="/">
          <h1 className="font-semibold text-3xl italic">CheckM8</h1>
        </Link>
      </div>
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
