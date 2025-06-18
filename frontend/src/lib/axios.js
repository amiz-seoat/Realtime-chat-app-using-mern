import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "http://lacalhost:5001/api",
    withCredentials: true,
})