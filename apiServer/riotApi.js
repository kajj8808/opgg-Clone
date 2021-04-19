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

const sendMatchsData = async (name, res) => {
  let result = [];
  const count = api_config.count;
  const {
    data: { puuid },
  } = await getSummoner(name);
  const { data: matchData } = await getMatchs(puuid, count);
  await matchData.map(async (match, index) => {
    await setTimeout(async () => {
      const {
        data: {
          info: { gameDuration, gameMode, participants }, //https://asia.api.riotgames.com/lol/match/v5/matches/KR_5133085931?api_key=RGAPI-a7409599-c3c4-497a-a37a-fb40fd57f991
        },
      } = await getMatch(match);
      result.push({
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
    }, index * 300);
  });
};

module.exports = { sendMatchsData };
