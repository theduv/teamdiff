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
    commonMatchesData = commonMatches?.data.map((match: GameMatchInfo) =>
      getOpponentCharacter({ matchInfos: match, PUUID: summoner?.PUUID })
    );
  }

  const onClickGame = (matchID: string, championName: string) => {
    setMatchValue({ id: matchID, champion: championName as CHAMPION_ID });
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="Recent games">
      <div className="flex items-center justify-center my-auto h-full">
        {!!commonMatchesData?.length ? (
          <div className="flex flex-col space-y-2 w-1/2 h-full ">
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
        ) : (
          <div className="h-full flex flex-col justify-center items-center">
            <span className="text-secondary italic">
              No recent common match found between you and this summoner.
            </span>
          </div>
        )}
      </div>
    </Modal>
  );
};

export const ModalRecentMatches = memo(ModalRecentMatchesBase);
