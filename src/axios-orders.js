import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burgerbuilder-4d5c0.firebaseio.com/"
});

export default instance;
