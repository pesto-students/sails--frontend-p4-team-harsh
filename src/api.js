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

export const fetchUsers = async () => {
  const response = await authAxios.get(
    `${process.env.REACT_APP_BASE_URL}/users`
  );

  return response;
};

export const fetchUser = async () => {
  const userId = localStorage.getItem("userId");
  const response = await authAxios.get(
    `${process.env.REACT_APP_BASE_URL}/users/${userId}`
  );

  return response;
};

export const createUser = async (payload) => {
  const response = await authAxios.post(
    `${process.env.REACT_APP_BASE_URL}/users`,
    payload
  );

  return response;
};

export const fetchManagers = async () => {
  const companyId = localStorage.getItem("companyId");
  const response = await authAxios.get(
    `${process.env.REACT_APP_BASE_URL}/users/managers/${companyId}`
  );

  return response;
};

export const fetchSalesPersons = async () => {
  const companyId = localStorage.getItem("companyId");
  const response = await authAxios.get(
    `${process.env.REACT_APP_BASE_URL}/users/sales/${companyId}`
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

export const getAllCompanies = async () => {
  const response = await authAxios.get(
    `${process.env.REACT_APP_BASE_URL}/companies`
  );

  return response;
};
