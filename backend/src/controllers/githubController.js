const { getRepoInfoGithub, getUserGithub } = require("../utils/github");

exports.getRepoInfo = async (req, res) => {
  try {
    const response = await getRepoInfoGithub();
    res.status(200).json({ status: "success", result: response });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { userName } = req.query;
    const response = await getUserGithub(userName);
    if (response === "Not Found") {
      res.status(200).json({ status: "not-found", message: "Not Found" });
    } else {
      res.status(200).json({ status: "success", result: response });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
