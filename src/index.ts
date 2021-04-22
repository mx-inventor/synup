import axios, { AxiosInstance } from "axios";

import location from "./location.service";

const baseURL: string = "https://api.synup.com/api/v4/";
let _axios: AxiosInstance;

export = (apiKey: string) => {
  if (apiKey) {
    _axios = axios.create({
      baseURL,
      headers: { Authorization: `API ${apiKey}` },
    });
  }

  return {
    Locations: location(_axios),
    _axios,
  };
};
