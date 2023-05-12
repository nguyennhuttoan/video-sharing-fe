import axios from "axios";

export default axios.create({
  baseURL: "https://video-sharing-be-production.up.railway.app/v1",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, Content-Type, X-Auth-Token, Authorization, Accept, charset, boundary, Content-Length",
  },
});
