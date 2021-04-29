import axios, { AxiosInstance } from "axios";

import location from "./location.service";
import user from "./user.service";
import interactions from "./interaction.service";
import folders from "./folders.service";
import tags from "./tags.service";
import listings from "./listings.service";
import ranking from "./ranking.service";
import campaigns from "./campaigns.service";
import places from "./places.service";
import analytics from "./analytics.service";

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
    Analytics: analytics(_axios),
    Campaigns: campaigns(_axios),
    Folders: folders(_axios),
    Interactions: interactions(_axios),
    Listings: listings(_axios),
    Locations: location(_axios),
    Places: places(_axios),
    Rankings: ranking(_axios),
    Tags: tags(_axios),
    Users: user(_axios),
    _axios,
  };
};
