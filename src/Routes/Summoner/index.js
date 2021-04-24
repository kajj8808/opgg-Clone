import React from "react";
import { useSummoner } from "./useSummoner";
import { useLocation } from "react-router-dom";
import summonerStyles from "styles.json";
import styled from "styled-components";
import Match from "Components/Match";
import ProFile from "Components/ProFile";

const Main = styled.div``;

const TierContainer = styled.div``;

const Summoner = () => {
  const userName = (useLocation().search).split("?name=")[1];
  const { loading, error, data: datas } = useSummoner(userName);
  let soloLeague = [];
  if(datas[0] !== undefined){
    soloLeague = datas[0].leagues[0];  
  }
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <Main>
          <ProFile summonerLevel={datas[0].summonerLevel} profileIconId={datas[0].profileIconId} />
          <TierContainer>
            {soloLeague.tier}
            {soloLeague.rank}
            {soloLeague.wins}
            {soloLeague.losses}
          </TierContainer>
          {datas.map((data, index) => (
            <Match index={index} {...data} />
          ))}
        </Main>
      )}
      <h1>summoner page</h1>
    </>
  );
};

export default Summoner;
