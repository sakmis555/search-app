import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://f429-2402-3a80-40c2-a65f-f186-6ba6-feb5-d13d.ngrok-free.app/api/",
});
export default axiosInstance;
