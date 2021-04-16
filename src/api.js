import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/",
});

export const getSummoner = (name) => api.get("summoner/", { params: { name } });
