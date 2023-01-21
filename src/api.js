import axios from "axios";
import { authAxios } from "./App";

// User APIs
export const registerUser = async (payload) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/register`,
    payload
  );

  return response;
};

export const loginUser = async (payload) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/login`,
    payload
  );

  return response;
};

export const fetchUser = async () => {
  const response = await authAxios.get(
    `${process.env.REACT_APP_BASE_URL}/users`
  );

  return response;
};

// Company APIs
export const registerCompany = async (payload) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/register/company`,
    payload
  );

  return response;
};
