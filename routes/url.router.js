const express = require("express");
const {
  handleGenerateShortId,
  handleGetAnalytics,
} = require("../controllers/url.controller");
const router = express.Router();

router.post("/", handleGenerateShortId);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
