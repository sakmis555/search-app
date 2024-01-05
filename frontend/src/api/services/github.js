import axiosInstance from "../../../api";

export const getRepoInfo = async () => {
  try {
    console.log("inside call");
    const response = await axiosInstance.get(`/github/get-repo-info`);
    return response.data;
  } catch (error) {
    console.log("Error : ", error);
    throw new Error(error);
  }
};

export const getUser = async (userName) => {
  try {
    console.log("inside call", userName);
    const response = await axiosInstance.get(`/github/get-user`, {
      params: { userName },
    });
    return response.data;
  } catch (error) {
    console.log("Error : ", error);
    throw new Error(error);
  }
};
