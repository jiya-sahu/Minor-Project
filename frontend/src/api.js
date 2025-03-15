import axios from "axios";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:10000/api"; 
export const loginUser = async (email, password) => {
  return await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
};

export const signupUser = async (name, email, password) => {
    return await axios.post(`${API_BASE_URL}/auth/signup`, { name, email, password });
  };
  
