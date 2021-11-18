import axios from "axios";
const baseURL = "https://api.thecatapi.com/v1";
const Token = "5905330e-b817-403e-ae23-ff5a4809c66d";

export const apiHelper = axios.create({
  baseURL,
  headers: {
    header: Token,
  },
});
