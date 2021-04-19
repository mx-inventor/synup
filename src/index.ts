import axios, { AxiosInstance } from "axios";

import location from "./location.service";
import user from "./user.service";
import interactions from "./interaction.service";
import folders from "./folders.service";
import tags from "./tags.service";
import listings from "./listings.service";
import ranking from "./ranking.service";

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
    Location: location(_axios),
    Users: user(_axios),
    Interactions: interactions(_axios),
    Folders: folders(_axios),
    Tags:  tags(_axios),
    Listings: listings(_axios),
    Rankings: ranking(_axios),
    _axios,
  };
};
