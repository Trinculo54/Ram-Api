const router = require("express").Router();

const User = require("../database/schemas/User");
const prefixes = require("../database/schemas/prefix");

async function data(guildId) {
  let newData = new prefixes({
    Prefix: "r.",
    ChannelID: "mod-logs",
    MuteRole: "muted",
    GuildID: guildId,
  });
  newData.save();
  return newData;
}

router.get("/:guilds/:users/:shard/:tshards/:version", async (req, res) => {
  const { guilds, users, shard, version, tshards } = req.params;
  const activities_list = [
    `r.help`,
    `r.help`,
    "Music On All Guilds",
    `Shard: ${shard} / ${tshards}`,
    `r.help | Shard: ${shard} / ${tshards}`,
    "Bot By: Gamearoo#0001",
    "with some code",
    "with You",
    `version: ${version}`,
    "Thanks For Your Support and using me on your server :)",
    `Support: http://ram.gamearoo.top/support`,
    `${guilds} Servers`,
    `Helping ${users} Users`,
    `New Look`,
  ];
  const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  let hi = {
    text: activities_list[index],
  };
  res.send(hi);
});

module.exports = router;
