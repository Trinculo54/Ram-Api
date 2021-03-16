const router = require("express").Router();
const discord = require("./discord");
const hug = require("./hug");
const gm = require("./gm");
const gn = require("./gn");
const slap = require("./slap");
var path = require("path");
const kiss = require("./kiss");
const status = require("./status");
const ball = require("./8ball");
const hello = require("./hello");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.use("/discord", discord);
router.use("/hug", hug);
router.use("/gm", gm);
router.use("/gn", gn);
router.use("/state", status);
router.use("/slap", slap);
router.use("/kiss", kiss);
router.use("/8ball", ball);
router.use("/hello", hello);

module.exports = router;
