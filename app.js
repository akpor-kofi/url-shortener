const express = require("express");
const Url = require("./models/urlModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));

app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

app.get("/", async (req, res) => {
  try {
    const urls = await Url.find();
    const title = "Url shortener";
    res.status(200).render("index", { title, urls });
  } catch (err) {
    console.log(err);
  }
});

app.get("/:shortUrl", async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });
    console.log(url);

    if (!url) return res.sendStatus(404);

    url.count++;
    url.save();
    res.redirect(url.fullUrl);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/createShortUrl", async (req, res) => {
  try {
    const { fullUrl } = req.body;
    const newUrl = await Url.create({ fullUrl });

    console.log(newUrl);
    res.status(200).json({
      status: "success",
      data: newUrl,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err,
    });
  }
});

module.exports = app;
