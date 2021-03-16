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
  const morningstrings = [
    "Had slapped",
    "Had slapped",
    "Had slapped",
    "Had slapped",
    "Had slapped",
    "Had attempted to slap",
  ];

  const morninggifs = [
    "https://gamearoo.top/wp-content/uploads/2020/04/slap.gif",
    "https://gamearoo.top/wp-content/uploads/2020/04/slap.gif",
    "https://gamearoo.top/wp-content/uploads/2020/04/slap2.gif",
    "https://gamearoo.top/wp-content/uploads/2020/04/slap3.gif",
    "https://gamearoo.top/wp-content/uploads/2020/04/slap4.gif",
    "https://66.media.tumblr.com/6612f49310618ccea8aae9781dc2cad3/8a5fd21b5c5e7193-7a/s540x810/a4f4820406fe1dc849010e39c122240d8733598c.gif",
  ];
  let hi = "NULL";
  let hi2 = "NULL";
  let hi4 = "NULL";

  const index = Math.floor(Math.random() * (morningstrings.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  if (morningstrings[index] === "Had attempted to slap") hi = "but";
  if (morningstrings[index] === "Had attempted to slap") hi4 = "Slapped";
  if (morningstrings[index] === "Had attempted to slap") hi2 = "instead!";
  let hi3 = {
    url: morninggifs[index],
    text: morningstrings[index],
    text2: hi,
    text3: hi2,
    text4: hi4,
  };
  res.send(hi3);
});

module.exports = router;
