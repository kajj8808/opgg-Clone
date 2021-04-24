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
            (userData) => userData.summonerName === name
          );
          const { gameDuration, gameMode, summonerLevel, profileIconId, leagues } = users;
          const {
            win,
            championName,
            spell1Id,
            spell2Id,
            perks: { styles },
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
          const mainStyle = styles[0].selections[0].perk;
          const subStyle = styles[1].selections[0].perk;
          return {
            summonerLevel,
            profileIconId,
            leagues,
            gameDuration,
            gameMode,
            win,
            championName,
            spell1Id,
            spell2Id,
            mainStyle,
            subStyle,
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
