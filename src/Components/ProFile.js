import React from "react";
import summonerStyles from "styles.json";
import styled from "styled-components";

const ProFileIcon = styled.div``;
const ProFileContainer = styled.div``;

const ProFile = (data) =>{
    console.log(data.summonerLevel)
    console.log(data.profileIconId)
    return `${data.summonerLevel} ${data.profileIconId}`
}

export default ProFile;