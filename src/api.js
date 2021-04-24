import axios from "axios";

const api = axios.create({
  baseURL: "localIP",
});

export const getSummoner = (name) => api.get("summoner/", { params: { name } });
