const express = require("express");
const { getRepoInfo, getUser } = require("../controllers/githubController");

const router = express.Router();

router.get("/get-repo-info", getRepoInfo);
router.get("/get-user", getUser);
module.exports = router;
