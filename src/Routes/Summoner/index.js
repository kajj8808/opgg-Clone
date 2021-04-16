import React from "react";
import { useSummoner } from "./useSummoner";
import styled from "styled-components";

const MatchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Summoner = () => {
  const { loading, error, data: matchs } = useSummoner("name");

  return (
    <>
      {loading && "loading..."}
      {matchs.map((match) => (
        <MatchContainer>
          <span>
            {match.gameDuration / 3600 / 60} {match.gameMode}
            {" | "}
          </span>
          {match.participants.map((participant) => (
            <>
              {participant.summonerName === "name"
                ? `${participant.kills} / ${participant.deaths} / ${participant.assists}`
                : null}
            </>
          ))}
        </MatchContainer>
      ))}
      <h1>Hello React opggClone App..</h1>
    </>
  );
};

export default Summoner;
