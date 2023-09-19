// import { nanoid } from "nanoid";
const URL = require("../models/urlSchema.model");
const nanoid = require("nanoid");

async function handleGenerateShortId(req, res) {
  try {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });
    const shortID = nanoid(8);
    console.log("Short ID generated", shortID);
    await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });
    console.log("cool");
    return res.json({
      message: "ShortId created successfully",
      id: shortID,
    });
  } catch (error) {
    console.error("Failed to generate Short Id");
  }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { handleGenerateShortId, handleGetAnalytics };
