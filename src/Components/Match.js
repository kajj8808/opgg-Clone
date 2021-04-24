import React from "react";
import summonerStyles from "styles.json";
import styled from "styled-components";

const summonerSpells = {
  1: { spell: "SummonerBoost" },
  3: { spell: "SummonerExhaust" },
  4: { spell: "SummonerFlash" },
  6: { spell: "SummonerHaste" },
  7: { spell: "SummonerHeal" },
  11: { spell: "SummonerSmite" },
  12: { spell: "SummonerTeleport" },
  13: { spell: "SummonerMana" },
  14: { spell: "SummonerDot" },
  21: { spell: "SummonerBarrier" },
  30: { spell: "SummonerPoroRecall" },
  31: { spell: "SummonerPoroThrow" },
  32: { spell: "SummonerSnowball" },
  39: { spell: "SummonerSnowURFSnowball_Mark" },
};

/* style number to image url. */
const stylesConversion = (id) => summonerStyles[id].iconUrl;

const MatchContainer = styled.div`
  width: 690px;
  height: 100px;
  display: grid;
  margin-bottom: 15px;
  grid-template-columns: 70px 100px 90px 115px 115px 170px 30px;
  background-color: ${(props) => (props.win ? "#a3cfec" : "#e2b6b3")};
`;

const GameStates = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  height: 100px;
  padding: 12px 0px;
`;

const ChampionIcon = styled.div`
  border-radius: 50%;
  width: 46px;
  height: 46px;
  margin-right: 5px;
  background-size: cover;
  display: inline-block;
  background-image: url(${(props) =>`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${props.name}.png`});
`;

const Spells = styled.div`
  display: inline-block;
`;

const SpellIcon = styled.div`
  border-radius: 3px;
  width: 22px;
  height: 22px;
  margin-right: 5px;
  margin-top: 2px;
  background-image: url(${(props) =>`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/spell/${props.spell}.png`});
  background-size: cover;
`;

const GameSet = styled.div`
  padding: 14px 0px;
`;

const Stats = styled.div`
  padding: 5px 0px;
  text-align: center;
  font-size: 11px;
`;

const KDA = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 30px 0px;
  text-align: right;
  font-size: 15px;
`;

const Items = styled.div`
  padding: 25px 0px;
  grid-gap: 2px;
  width: 96px;
  height: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Item = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.18);
  background-image: url(${(props) =>props.item !== 0? `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${props.item}.png`: null});
  background-size: cover;
`;

const Players = styled.div`
  padding: 5px 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 11px;
`;

const BlueTeam = styled.div``;

const RedTeam = styled.div``;

const Player = styled.div`
  width: 80px;
  height: 18px;
  font-size: 11px;
`;

const PlayerName = styled.div`
  display: inline-block;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChampionIconMin = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(${(props) =>`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${props.name}.png`});
  background-size: cover;
`;

const ShowDetailBtn = styled.div`
  height: 100px;
  background-color: ${(props) => (props.win ? "#64b1e4" : "#e89d99")};
`;

const ChampionName = styled.p`
  margin-top: 5px;
  text-align: center;
  font-size: 11px;
  color: #353b48;
`;

const Styles = styled.div`
  display: inline-block;
`;

const StyleIcon = styled.div`
  margin-top: 2px;
  width: 22px;
  height: 22px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  background-image: url(${(props) =>`https://ddragon.leagueoflegends.com/cdn/img/${props.styleUrl}`});
  background-size: cover;
`;

const ColorText = styled.p`
  display: inline-block;
  color: ${(props) => props.Color};
`;

const KDAgrade = styled.p`
  margin-top: 5px;
  font-size: 12px;
  display: block;
`;

const Match = (data) => (
  <>
    <MatchContainer win={data.win} key={data.index}>
      <GameStates>
        {data.gameDuration}
        <br />
        {data.win ? (
          <ColorText Color={"#2980b9"}>승리</ColorText>
        ) : (
          <ColorText Color={"#e74c3c"}>패배</ColorText>
        )}
        <br />
        {data.gameMode}
      </GameStates>
      <GameSet>
        <ChampionIcon name={data.championName} />
        <Spells>
          <SpellIcon spell={summonerSpells[4].spell} />
          {/* data.spell1Id */}
          <SpellIcon spell={summonerSpells[12].spell} />
          {/* data.spell2Id */}
        </Spells>
        <Styles>
          {/* style number to image url. */}
          <StyleIcon styleUrl={stylesConversion(data.mainStyle)} />
          <StyleIcon styleUrl={stylesConversion(data.subStyle)} />
        </Styles>
        <ChampionName>{data.championName}</ChampionName>
      </GameSet>
      <KDA>
        {data.kills} / <ColorText Color="red">{data.deaths}</ColorText> / {data.assists}
        <KDAgrade>{((data.kills + data.assists) / data.deaths).toFixed(2)}:1 평점</KDAgrade>
      </KDA>
      <Stats>
        <span>레벨{data.champLevel}</span>
        <br />
        <span>{data.totalMinionsKilled + data.neutralMinionsKilled}cs</span>
      </Stats>
      <Items>
        <Item item={data.item0} />
        <Item item={data.item1} />
        <Item item={data.item2} />
        <Item item={data.item6} />
        <Item item={data.item3} />
        <Item item={data.item4} />
        <Item item={data.item5} />
      </Items>
      <Players>
        <BlueTeam>
          {data.users.participants.map((data, index) =>
            data.teamId === 100 ? (
              <Player>
                <ChampionIconMin name={data.championName} />
                <PlayerName>{data.summonerName}</PlayerName>
              </Player>
            ) : null
          )}
        </BlueTeam>
        <RedTeam>
          {data.users.participants.map((data, index) =>
            data.teamId === 200 ? (
              <Player>
                <ChampionIconMin name={data.championName} />
                <PlayerName>{data.summonerName}</PlayerName>
              </Player>
            ) : null
          )}
        </RedTeam>
      </Players>
      <ShowDetailBtn win={data.win} />
    </MatchContainer>
  </>
);

export default Match;
