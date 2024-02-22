import { memo } from "react";
import { Route, Switch } from "wouter";

import { HomeView } from "../views/home/HomeView";
import SummonerView from "../views/summoner/SummonerView.container";

const RouterBase = () => (
  <Switch>
    <div className="h-full w-full bg-blue-bg">
      <Route path="/" component={HomeView} />
      <Route path="/summoner/:id" component={SummonerView} />
    </div>
  </Switch>
);

export const Router = memo(RouterBase);
