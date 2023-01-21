import axios from "axios";

export const registerCompany = async (payload) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/register/company`,
    payload
  );

  return response;
};
