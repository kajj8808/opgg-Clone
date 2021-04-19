import React, { useState, useEffect } from "react";
import { getSummoner } from "api";

export const useSummoner = (name) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });
  useEffect(() => {
    getSummoner(name)
      .then((result) => {
        let { data: matchs } = result;
        const data = matchs.map((users) => {
          const searchUser = users.participants.filter(
            (userData) => userData.summonerName === "name"
          );
          const { gameDuration, gameMode } = users;
          const {
            win,
            championName,
            spell1Id,
            spell2Id,
            summoner1Casts,
            summoner2Casts,
            kills,
            deaths,
            assists,
            champLevel,
            totalMinionsKilled,
            neutralMinionsKilled,
            item0,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
          } = searchUser[0];
          return {
            gameDuration,
            gameMode,
            win,
            championName,
            spell1Id,
            spell2Id,
            kills,
            deaths,
            assists,
            champLevel,
            totalMinionsKilled,
            neutralMinionsKilled,
            item0,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            users,
          };
        });
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loding: false, error });
      });
  }, []);
  return { ...state };
};
