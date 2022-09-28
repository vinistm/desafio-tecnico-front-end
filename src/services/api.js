import axios from "axios";
const api = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
});
const apiDelay = axios.create({
  baseURL:"https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=3000"
});
export { api,apiDelay };