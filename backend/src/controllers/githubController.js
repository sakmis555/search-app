const getRepoInfoGithub = require("../utils/github");

exports.getRepoInfo = async (req, res) => {
  try {
    console.log("inside controller");
    const response = await getRepoInfoGithub();
    res.status(200).json({ status: "success", result: response });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
