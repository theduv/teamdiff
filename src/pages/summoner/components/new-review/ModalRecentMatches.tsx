import { Dispatch, SetStateAction, memo, useContext } from "react";
import TimeAgo from "timeago-react";

import { Modal } from "../../../../components/Modal/Modal";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { useGetSameGameHistoryData } from "../../../../hooks/queries/history";
import { AuthContext } from "../../../../contexts/Auth";
import { GameMatchInfo, Participant } from "../../../../lib/types/riot-api";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { CHAMPION_ID } from "../../../../hooks/enums/lib";

const getOpponentCharacter = ({
  matchInfos,
  PUUID,
}: {
  matchInfos?: GameMatchInfo;
  PUUID?: string;
}) => {
  if (!matchInfos || !PUUID) return {};
  const opponent = matchInfos?.participants?.find(
    (participant: Participant) => participant.puuid === PUUID
  );
  const championName = opponent?.championName;
  return {
    id: matchInfos.gameId,
    championName,
    timestamp: matchInfos.gameCreation,
  };
};

type ModalRecentGamesProps = {
  isOpen: boolean;
  handleClose: () => void;
  setMatchValue: Dispatch<
    SetStateAction<{ id: string; champion: CHAMPION_ID } | null>
  >;
};

const ModalRecentMatchesBase = ({
  isOpen,
  handleClose,
  setMatchValue,
}: ModalRecentGamesProps) => {
  const { summoner } = useContext(SummonerPageContext);
  const { summoner: currentUser } = useContext(AuthContext);
  const { data: commonMatches } = useGetSameGameHistoryData(
    summoner?.PUUID as string,
    currentUser?.PUUID as string
  );
  let commonMatchesData: {
    championName: string;
    timestamp: number;
    id: string;
  }[] = [];
  if (commonMatches?.data) {
    const recentGames = commonMatches?.data.map((match: GameMatchInfo) =>
      getOpponentCharacter({ matchInfos: match, PUUID: summoner?.PUUID })
    );
    commonMatchesData = [...recentGames];
  }

  const onClickGame = (matchID: string, championName: string) => {
    setMatchValue({ id: matchID, champion: championName as CHAMPION_ID });
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="Recent games">
      <div className="flex items-center justify-center my-auto">
        <div className="flex flex-col space-y-2 items-center w-1/2">
          {commonMatchesData?.map((match) => (
            <button
              key={`match-${match.id}`}
              className="flex items-center justify-between w-full"
              onClick={() => onClickGame(match.id, match.championName)}
            >
              <img
                src={getChampionIconURL(match.championName as CHAMPION_ID)}
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="text-2xl text-gray-400">
                <TimeAgo datetime={match.timestamp} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export const ModalRecentMatches = memo(ModalRecentMatchesBase);
