import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e2e7-42-105-135-221.ngrok-free.app/api/",
});
export default axiosInstance;
