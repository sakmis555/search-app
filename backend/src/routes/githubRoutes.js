const express = require("express");
const { getRepoInfo } = require("../controllers/githubController");

const router = express.Router();

router.get("/get-repo-info", getRepoInfo);

module.exports = router;
