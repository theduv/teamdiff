import { memo } from "react";
import { Route, Switch } from "wouter";
import { HomeView } from "../views/home/HomeView";

const RouterBase = () => (
  <Switch>
    <Route path="/" component={HomeView} />
  </Switch>
);

export const Router = memo(RouterBase);
