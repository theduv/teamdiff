import { memo, useContext } from "react";
import TimeAgo from "timeago-react";

import { Modal } from "../../../../components/Modal/Modal";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { useGetSameGameHistoryData } from "../../../../hooks/queries/history";
import { AuthContext } from "../../../../contexts/Auth";
import { GameMatchInfo, Participant } from "../../../../types/riot-api";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import { CHAMPION_ID } from "../../../../enums/lib";

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
    championName,
    timestamp: matchInfos.gameCreation,
  };
};

type ModalRecentGamesProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const ModalRecentGamesBase = ({
  isOpen,
  handleClose,
}: ModalRecentGamesProps) => {
  const { summoner } = useContext(SummonerPageContext);
  const { summoner: currentUser } = useContext(AuthContext);
  const { data: commonMatches } = useGetSameGameHistoryData(
    summoner?.PUUID as string,
    currentUser?.PUUID as string
  );
  let commonMatchesData: { championName: string; timestamp: number }[] = [];
  if (commonMatches?.data) {
    const recentGames = commonMatches?.data.map((match: GameMatchInfo) =>
      getOpponentCharacter({ matchInfos: match, PUUID: summoner?.PUUID })
    );
    commonMatchesData = [...recentGames];
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="Recent games">
      <div className="grid grid-cols-2 mx-auto items-center gap-2 my-auto">
        {commonMatchesData?.map((match) => (
          <>
            <img
              src={getChampionIconURL(match.championName as CHAMPION_ID)}
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="text-2xl text-gray-400">
              <TimeAgo datetime={match.timestamp} />
            </span>
          </>
        ))}
      </div>
    </Modal>
  );
};

export const ModalRecentGames = memo(ModalRecentGamesBase);
