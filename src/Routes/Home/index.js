import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInput } from "./useInput";
import styles from "styled-components";

const Home = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("", maxLen);
  return (
    <>
      <form action="summoner" handleSubmit={name.handleSubmit}>
        <input placeholder="summonerName" value={name.value} onChange={name.onChange} name="name"  />
      </form>      
    </>
  );
};

export default Home;
