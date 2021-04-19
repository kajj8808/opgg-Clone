import React from "react";
import { useSummoner } from "./useSummoner";
import styled from "styled-components";

const MatchContainer = styled.div`
  width: 690px;
  height: 100px;
  display: grid;
  margin-bottom: 15px;
  grid-template-columns: 70px 100px 90px 115px 115px 170px 30px;
  background-color: ${(props) => (props.win ? "#a3cfec" : "#e2b6b3")};
`;

const GameStates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameSet = styled.div``;

const Stats = styled.div``;

const KDA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div``;
const Item = styled.div``;

const Players = styled.div``;

const ShowDetailBtn = styled.div`
  height: 100px;
  background-color: ${(props) => (props.win ? "#a3cfec" : "#e2b6b3")};
`;

const Summoner = () => {
  const { loading, error, data: datas } = useSummoner("name");
  console.log(datas);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <>
          {datas.map((data, index) => (
            <MatchContainer win={data.win} key={index}>
              <GameStates>
                {data.gameDuration}
                <br />
                {data.win ? "win" : "lose"}
                <br />
                {data.gameMode}
              </GameStates>
              <GameSet>
                {data.championName} |{data.spell1Id} |{data.spell2Id}
              </GameSet>
              <KDA>
                {data.kills} / {data.deaths} / {data.assists}
              </KDA>
              <Stats>
                {data.champLevel} | {data.totalMinionsKilled + data.neutralMinionsKilled}
              </Stats>
              <Items>
                {data.item0} / {data.item1} / {data.item2} / {data.item3} / {data.item4} /{" "}
                {data.item5} / {data.item6}
              </Items>
              <Players>
                {data.users.participants.map((data , index) => (
                  <>
                    {data.championName}<br />
                    {data.summonerName}        
                  </>
                ))}
              </Players>
              <ShowDetailBtn win={data.win}> </ShowDetailBtn>
            </MatchContainer>
          ))}
        </>
      )}
      <h1>summoner page</h1>
    </>
  );
};

export default Summoner;
