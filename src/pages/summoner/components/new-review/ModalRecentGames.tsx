import { memo, useContext } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import { useGetSameGameHistoryData } from "../../../../hooks/queries/history";
import { AuthContext } from "../../../../contexts/Auth";
import { GameMatchInfo, Participant } from "../../../../types/riot-api";
import { getChampionIconURL } from "../../../../lib/functions/getChampionIconURL";
import dayjs from "dayjs";
import { CHAMPION_ID } from "../../../../enums/lib";

const getOpponentCharacter: { championName?: string; timestamp?: number } = (
  matchInfos: GameMatchInfo | undefined,
  PUUID: string | undefined
) => {
  if (!matchInfos || !PUUID) return {};
  const championName = matchInfos?.participants?.find(
    (participant: Participant) => participant.puuid === PUUID
  ).championName;
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
      getOpponentCharacter(match, summoner?.PUUID)
    );
    commonMatchesData = [...recentGames];
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="Recent games">
      <div className="flex flex-col items-center space-y-4">
        {commonMatchesData?.map((match) => (
          <div className="flex items-center space-x-4">
            <img
              src={getChampionIconURL(match.championName as CHAMPION_ID)}
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="text-3xl text-gray-400">
              {dayjs(match.timestamp).format("DD/MM at HH:MM")}
            </span>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export const ModalRecentGames = memo(ModalRecentGamesBase);
