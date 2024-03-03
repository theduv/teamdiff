import Fastify from "fastify";
import { RiotApi, Constants, LolApi } from "twisted";
import cors from "@fastify/cors";
import "dotenv/config";
import axios from "axios";

const apiLoL = new LolApi({
  key: process.env.RIOT_API_KEY,
});

const apiRiot = new RiotApi({
  key: process.env.RIOT_API_KEY,
});

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

fastify.get("/", async (req, rep) => {
  return { hello: world };
});

fastify.get("/riot/history/common/:srcPUUID/:dstPUUID", async (req, res) => {
  const { srcPUUID, dstPUUID } = req.params;
  let finalRes = [];
  if (!srcPUUID || !dstPUUID) {
    throw new Error();
  }
  const destHistoryIDs = await apiLoL.MatchV5.list(
    dstPUUID,
    Constants.RegionGroups.EUROPE
  );
  for (let matchID of destHistoryIDs.response) {
    const currentMatch = await apiLoL.MatchV5.get(
      matchID,
      Constants.RegionGroups.EUROPE
    );
    const matchData = currentMatch?.response?.metadata;
    const participants = matchData?.participants;
    if (participants?.includes(srcPUUID) && participants?.includes(dstPUUID))
      finalRes.push(currentMatch.response.info);
  }
  res.send(finalRes);
});

fastify.get("/riot/history/:puuid", async (req, rep) => {
  const { puuid } = req.params;
  if (![puuid]) throw new error();
  const res = await apiLoL.MatchV5.list(
    puuid,
    Constants.RegionGroups.EUROPE,
    {}
  );
  console.log(res.response);
  return { matches: res.response };
});

fastify.get("/riot/puuid/:riotId", async (req, rep) => {
  const { riotId } = req.params;
  if (!riotId) throw new error();
  const [summonerName, summonerTag] = riotId.split("-");
  const res = await apiRiot.Account.getByRiotId(
    summonerName,
    summonerTag,
    Constants.RegionGroups.EUROPE
  );
  const puuid = res.response.puuid;
  return { puuid };
});

fastify.get("/riot/history/match/:matchId", async (req, res) => {
  const { matchId } = req.params;
  if (!matchId) throw new error();
  const response = await apiLoL.MatchV5.get(
    matchId,
    Constants.RegionGroups.EUROPE
  );
  res.send(response.response);
});

fastify.get("/riot/summoner/:summonerName/:summonerTag", async (req, res) => {
  const { summonerName, summonerTag } = req.params;
  if (!summonerName || !summonerTag) {
    throw new Error();
  }
  const uuidCall = await apiRiot.Account.getByRiotId(
    summonerName,
    summonerTag,
    Constants.RegionGroups.EUROPE
  );
  const puuid = uuidCall.response.puuid;
  return {
    PUUID: puuid,
    hasAnAccount: false,
    name: summonerName,
    tag: summonerTag,
    description: null,
    globalGrade: null,
    championGrades: null,
    recievedReviewsIDs: null,
    givenReviewsIDs: null,
    badges: [],
  };
});

fastify.get("/riot/summoner/:puuid", async (req, res) => {
  const { puuid } = req.params;
  if (!puuid) throw new error();
  const response = await axios.get(
    `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${process.env.RIOT_API_KEY}`,
    {
      headers: {
        Origin: "https://developer.riotgames.com",
      },
    }
  );
  res.send(response.data);
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(-1);
}
