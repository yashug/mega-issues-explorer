import axios from "axios";

/**
 * A pre-configured instance of Axios for making HTTP requests.
 * @name request
 * @type {AxiosInstance}
 */
const request = axios.create({
  baseURL: "https://sfe-interview.hoppscotch.com",
  responseType: "json",
});

export default request;
