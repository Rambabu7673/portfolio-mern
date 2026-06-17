import axios from "axios";
const contact = axios.create({
  baseURL: "http://localhost:2000/user",
});

export default contact;
