import axios from "axios";

const instanse = axios.create({
  //THE API (cloud function) URL
  baseURL: "https://us-central1-clone-79319.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-79319/us-central1/api",
});

export default instanse;
