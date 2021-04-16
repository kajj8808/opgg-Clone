import React, { useState, useEffect } from "react";
import {getSummoner} from "api";

export const useSummoner = (name) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });
  useEffect(() => {
    getSummoner(name)
      .then((result) => {
        const { data } = result;
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loding: false, error });
      });
  }, []);
  return { ...state };
};
