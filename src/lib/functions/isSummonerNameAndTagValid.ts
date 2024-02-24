const SUMMONER_NAME_MIN_LENGTH = 3;
const SUMMONER_NAME_MAX_LENGTH = 16;

const SUMMONER_TAG_MIN_LENGTH = 3;
const SUMMONER_TAG_MAX_LENGTH = 5;

export const isSummonerNameAndTagValid = (
  summonerNameAndTag: string,
  separator: string
) => {
  if (!summonerNameAndTag.includes(separator)) return false;
  const [summonerName, summonerTag] = summonerNameAndTag.split(separator);

  return (
    summonerName.length >= SUMMONER_NAME_MIN_LENGTH &&
    summonerName.length <= SUMMONER_NAME_MAX_LENGTH &&
    summonerTag.length >= SUMMONER_TAG_MIN_LENGTH &&
    summonerTag.length <= SUMMONER_TAG_MAX_LENGTH
  );
};
