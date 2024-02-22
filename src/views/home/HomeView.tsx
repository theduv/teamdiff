import { memo } from "react";

const HomeViewBase = () => {
  return <div>Hello world !</div>;
};

export const HomeView = memo(HomeViewBase);
