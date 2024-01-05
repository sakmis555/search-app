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

const getUserGithub = async (userName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await octokit.request("GET /users/{username}", {
        username: userName,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      console.log("Response **");
      console.log(response.data);
      resolve(response.data);
    } catch (error) {
      // if (error.message === "Not Found") {
      // resolve(error.message);
      // } else {
      console.log("Error =>", error);
      console.log("Error Message=>", error.message);
      reject(error);
      // }
    }
  });
};

module.exports = { getRepoInfoGithub, getUserGithub };
