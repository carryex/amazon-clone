import axios from "axios";

const instanse = axios.create({
  //THE API (cloud function) URL
  baseURL: "http://localhost:5001/clone-79319/us-central1/api",
});

export default instanse;
