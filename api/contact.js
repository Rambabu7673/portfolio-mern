import axios from "axios";
const contact = axios.create({
  baseURL: import.meta.env.VITE_USER_URL,
});

export default contact;
