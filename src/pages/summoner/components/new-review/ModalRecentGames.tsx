import { memo, useContext } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { SummonerPageContext } from "../../contexts/SummonerPage.context";
import {
  useGetMatchHistoryData,
  useGetMatchHistoryIDs,
} from "../../../../hooks/queries/history";

type ModalRecentGamesProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const ModalRecentGamesBase = ({
  isOpen,
  handleClose,
}: ModalRecentGamesProps) => {
  const { summoner } = useContext(SummonerPageContext);
  const { data: data } = useGetMatchHistoryIDs(summoner?.PUUID);
  const matches = data?.matches;
  const miaou = useGetMatchHistoryData(matches ?? []);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title="Recent games">
      <div></div>
    </Modal>
  );
};

export const ModalRecentGames = memo(ModalRecentGamesBase);
