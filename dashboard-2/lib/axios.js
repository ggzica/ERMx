import axios from "axios";
import { getSession } from "next-auth/react";
import { toast } from "sonner";
import { handleApiError } from "./handleApiError";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5500/api/",
});

axiosInstance.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session?.user?.jwt) {
    config.headers.Authorization = `Bearer ${session.user.jwt}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const erromessage = handleApiError(error);
    toast.error(erromessage);
    return Promise.reject(error);
  }
);

export default axiosInstance;
