import { memo, useContext } from "react";
import { Route, Switch } from "wouter";

import Header from "../components/Layout/Header";
import { HomePage } from "../pages/home/HomePage";
import SummonerPage from "../pages/summoner/SummonerPage.container";
import SummonerMorePage from "../pages/summoner-more/SummonerMorePage.container";
import { AuthContext } from "../contexts/Auth";

const RouterBase = () => {
  const { isConnected } = useContext(AuthContext);

  return isConnected ? (
    <Switch>
      <div className="h-full pb-[80px] w-full bg-primary ">
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/summoner/:id" component={SummonerPage} />
        <Route path="/summoner/:id/more" component={SummonerMorePage} />
      </div>
    </Switch>
  ) : (
    <div>todo</div>
  );
};

export const Router = memo(RouterBase);
