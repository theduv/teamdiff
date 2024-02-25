import _ from "lodash";

export const generateIDs = (amountOfIDs: number) => {
  const arrayIDs: string[] = [];

  for (let i = 0; i < amountOfIDs; i++) arrayIDs.push(_.uniqueId());
  return arrayIDs;
};
