import axios from "axios";

export const loginUser = async (credentials) => {
  const res = await axios.post("http://localhost:5000/api/login", credentials);
  return res.data;
};
