const request = require("request");
const fs = require("fs");

const get = async () => {
  let result = {};
  const url =
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json";
  request(url, (err, res, body) => {
    const datas = JSON.parse(body);
    datas.map((data) => {
      const icon = data.iconPath.split("/lol-game-data/assets/v1/")[1];
      const iconUrl = icon;
      result[data.id] = { name: data.name, iconUrl: iconUrl};
    });
    fs.writeFileSync("style.json" , JSON.stringify(result));
  });
};

get();
