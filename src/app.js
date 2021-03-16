require("dotenv").config();

const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const Store = require("connect-mongo")(session);
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3002;
const routes = require("./routes");

mongoose
  .connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(console.log("Mongo Activated.. on API!"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: [`http://${process.env.ip}`],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.sec,
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    resave: false,
    saveUninitialized: false,
    store: new Store({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);
app.get("/support", async (req, res) => {
  res.redirect(301, "https://discord.gg/VyabcGc");
});
app.get("/invite", async (req, res) => {
  res.redirect(
    301,
    "https://discord.com/api/oauth2/authorize?client_id=564579659526832178&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=bot"
  );
});

app.listen(80, () => console.log(`Running on port ${port}`));
