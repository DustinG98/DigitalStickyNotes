import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("auth-token");

  return axios.create({
    baseURL: "http://localhost:5000/api/auth/users",
    headers: {
      "auth-token": token
    }
  });
};