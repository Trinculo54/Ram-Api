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

router.get("/", async (req, res) => {
  const activities_list = [
    `Hello`,
    `Hi`,
    "Hi, How are you?",
    "Hello, How are you?",
  ];
  const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  let hi = {
    text: activities_list[index],
  };
  res.send(hi);
});

module.exports = router;
