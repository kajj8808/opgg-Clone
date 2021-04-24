const axios = require("axios");
const api_config = require("./api_config");

const api_key = api_config.api_key;

const apiv4 = axios.create({
  baseURL: "https://kr.api.riotgames.com/lol/",
  params: {
    api_key: api_key,
  },
});

const apiv5 = axios.create({
  baseURL: "https://asia.api.riotgames.com/lol/",
  params: {
    api_key: api_key,
  },
});

const getSummoner = (name) => apiv4.get(`summoner/v4/summoners/by-name/${name}`);

const getMatchs = (puuid, count) =>
  apiv5.get(`match/v5/matches/by-puuid/${puuid}/ids`, { params: { start: 0, count } });

const getMatch = (matchId) => apiv5.get(`match/v5/matches/${matchId}`);

const getLeague = (id) => apiv4.get(`league/v4/entries/by-summoner/${id}`);

const sendMatchsData = async (name, res) => {
  let result = [];
  const count = api_config.count;
  try {
    const {
      data: { puuid, id, summonerLevel, profileIconId },
    } = await getSummoner(name);
    let { data: leagues } = await getLeague(id);
    leagues = await leagues.filter((league) => league.queueType === "RANKED_SOLO_5x5");
    const { data: matchData } = await getMatchs(puuid, count);
    await matchData.map(async (match, index) => {
      await setTimeout(async () => {
        const {
          data: {
            info: { gameDuration, gameMode, participants },
          },
        } = await getMatch(match);
        result.push({
          leagues,
          summonerLevel,
          profileIconId,
          gameDuration,
          gameMode,
          participants,
        });
        if (index === count - 1) {
          res.header("Access-Control-Allow-Origin", "*");
          return res.json(result);
        } else {
          console.log(index);
        }
      }, index * 100);
    });
  } catch (error) {
    return res.send(eror);
  }
};

module.exports = { sendMatchsData };
