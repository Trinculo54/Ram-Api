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
    `https://media.giphy.com/media/JYpVJEcNrDAWc/giphy.gif`,
    `https://media.giphy.com/media/JYpVJEcNrDAWc/giphy.gif`,
    "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
    "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
    "https://gifimage.net/wp-content/uploads/2017/09/anime-forehead-kiss-gif-11.gif",
  ];
  const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  let hi = {
    url: activities_list[index],
  };
  res.send(hi);
});

module.exports = router;
