import axios from "axios";

export default axios.create({
  baseURL: "http://shuttlelane.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
