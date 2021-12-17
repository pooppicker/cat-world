import axios from "axios";
import Swal from "sweetalert2";
const baseURL = "https://api.thecatapi.com/v1";
const Token = "5905330e-b817-403e-ae23-ff5a4809c66d";

export const apiHelper = axios.create({
  baseURL,
  headers: {
    headers: Token,
  },
});

export const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
});
