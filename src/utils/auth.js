import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const verifyUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const res = await axios.get(`${API}/api/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data; // valid user

  } catch (err) {
    localStorage.removeItem("token"); // invalid token
    return null;
  }
};