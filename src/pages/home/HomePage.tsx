import { ChangeEvent, KeyboardEvent, memo, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { navigate } from "wouter/use-browser-location";

import { isSummonerNameAndTagValid } from "../../lib/functions/isSummonerNameAndTagValid";
import { TextInput } from "../../components/TextInput/TextInput";

const HomePageBase = () => {
  const [summonerValue, setSummonerValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onChangeSummonerValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(null);
    }
    setSummonerValue(e.target.value);
  };

  const inputKeydownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (!isSummonerNameAndTagValid(summonerValue, "#")) {
      setError("Invalid summoner name format.");
      return;
    }
    const [summonerName, summonerTag] = summonerValue.split("#");

    navigate(`/summoner/${summonerName}-${summonerTag}`);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col space-y-4">
        <h1 className="text-gray-100 text-4xl">Summoner name</h1>
        <div className="flex items-center space-x-4">
          <TextInput
            value={summonerValue}
            onChangeValue={onChangeSummonerValue}
            onKeyDown={inputKeydownHandler}
            placeholder="AlphaDraven#EUW"
          />
          <button onClick={onClickSearch}>
            <MdArrowForwardIos color="white" size={32} />
          </button>
        </div>
        <div className="h-10">
          {error && <span className="text-red-400">{error}</span>}
        </div>
      </div>
    </div>
  );
};

export const HomePage = memo(HomePageBase);
