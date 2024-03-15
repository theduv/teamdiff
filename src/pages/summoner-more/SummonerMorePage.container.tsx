import { memo } from "react";

import SummonerMorePage from "./SummonerMorePage";

import { SummonerMorePageContextProvider } from "./contexts/SummonerMorePage.context";

const SummonerMorePageContainerBase = () => {
  return (
    <SummonerMorePageContextProvider>
      <SummonerMorePage />
    </SummonerMorePageContextProvider>
  );
};

export default memo(SummonerMorePageContainerBase);
