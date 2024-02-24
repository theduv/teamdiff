import { memo } from "react";
import { Route, Switch } from "wouter";

import { HomePage } from "../pages/home/HomePage";
import SummonerPage from "../pages/summoner/SummonerPage.container";
import SummonerMorePage from "../pages/summoner-more/SummonerMorePage.container";

const RouterBase = () => (
  <Switch>
    <div className="h-full w-full bg-blue-bg">
      <Route path="/" component={HomePage} />
      <Route path="/summoner/:id" component={SummonerPage} />
      <Route path="/summoner/:id/more" component={SummonerMorePage} />
    </div>
  </Switch>
);

export const Router = memo(RouterBase);
