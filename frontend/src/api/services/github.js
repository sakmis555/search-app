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
