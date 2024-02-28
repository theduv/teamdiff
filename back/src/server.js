import Fastify from "fastify";
import { RiotApi, Constants, LolApi } from "twisted";
import cors from "@fastify/cors";
import "dotenv/config";

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

fastify.get("/riot/history/common/:srcPUUID/:destPUUID", async (req, res) => {
  const { srcPUUID, destPUUID } = req.params;
  let finalRes = [];
  if (!srcPUUID || !destPUUID) {
    throw new Error(406);
  }
  const destHistoryIDs = await apiLoL.MatchV5.list(
    destPUUID,
    Constants.RegionGroups.EUROPE
  );
  for (let matchID of destHistoryIDs.response) {
    const currentMatch = await apiLoL.MatchV5.get(
      matchID,
      Constants.RegionGroups.EUROPE
    );
    const matchData = currentMatch?.response?.metadata;
    const participants = matchData?.participants;
    if (participants?.includes(srcPUUID) && participants?.includes(destPUUID))
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

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(-1);
}
