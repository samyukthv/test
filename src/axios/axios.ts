import axios, { AxiosInstance } from "axios";

export const randomuser: AxiosInstance = axios.create({
  baseURL: "https://randomuser.me/",
});
