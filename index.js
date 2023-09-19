const express = require("express");
require("./db/db.connect");
require("dotenv").config();
const urlRoute = require("./routes/url.router");
const URL = require("./models/urlSchema.model");

const app = express();
app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); // eslint-disable-line no-console
});
