import { memo } from "react";
import { Route, Switch } from "wouter";
import { HomeView } from "../views/home/HomeView";

const RouterBase = () => (
  <Switch>
    <div className="h-full w-full bg-blue-bg">
      <Route path="/" component={HomeView} />
    </div>
  </Switch>
);

export const Router = memo(RouterBase);
