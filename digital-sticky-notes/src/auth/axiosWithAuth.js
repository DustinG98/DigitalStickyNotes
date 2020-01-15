import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("auth-token");

  return axios.create({
    baseURL: "https://notes4you-be.herokuapp.com/api/auth/users",
    headers: {
      "auth-token": token
    }
  });
};