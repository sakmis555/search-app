const octokit = require("../config/githubConfig");

const getRepoInfoGithub = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/issues",
        {
          owner: "octocat",
          repo: "Spoon-Knife",
        }
      );
      resolve(response.data);
    } catch (error) {
      console.log("Error =>", error);
      reject(error);
    }
  });
};
// export default getRepoInfoGithub;
module.exports = getRepoInfoGithub;
