const express = require("express");
const riotApi = require("./riotApi");
const app = express();
const port = 80;

app.get("/summoner/", async (req, res) => {
  riotApi.sendMatchsData(req.query.name, res);
});

app.listen(port, () => console.log("api server on!"));
