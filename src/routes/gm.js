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
    "I hope your day be filled with countless moments of joy and surprises. Good morning!",
    "I hope your day be filled with countless moments of joy and surprises. Good morning!",
    "Enjoy the miracles of this beautiful morning and let them fill your heart with joy!",
    "A new day has come. It’s your time to rise and shine like a star!",
    "Good morning to you. May every step you make be filled with happiness, love, and peace.",
    "Life is full of uncertainties. But there will always be a sunrise after every sunset. Good morning!",
    "Life never gives you a second chance. So, enjoy every bit of it. Why not start with this beautiful morning. Good morning!",
  ];

  const morninggifs = [
    "http://media1.tenor.com/images/e4fdb8da09f39c70dd386a078cc1e3a6/tenor.gif",
    "http://media1.tenor.com/images/e4fdb8da09f39c70dd386a078cc1e3a6/tenor.gif",
    "http://media1.tenor.com/images/1825d46360aa671a7cd938f97bf759f0/tenor.gif",
    "http://media1.tenor.com/images/11fdefc3cf323a47af3f665f018c2c77/tenor.gif",
    "http://media1.tenor.com/images/52bf1afef19876cdaec8906952254802/tenor.gif",
    "http://media1.tenor.com/images/eddf25eefdbff3b48957aea46f946f12/tenor.gif",
    "http://media1.tenor.com/images/74c2f4ca5567526ec24ae931cbf3f27d/tenor.gif",
  ];

  const index = Math.floor(Math.random() * (morningstrings.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  const index2 = Math.floor(Math.random() * (morninggifs.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  let hi = {
    url: morninggifs[index2],
    text: morningstrings[index],
  };
  res.send(hi);
});

module.exports = router;
