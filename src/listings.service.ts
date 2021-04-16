import { AxiosInstance } from "axios";
import { listings } from "./types/listings";

const endpoint = "location/:id/listings";

export default (axios: AxiosInstance) => {
  return {
    getPremium:(params:listings)=>{
        return axios.get(endpoint,{ params })
    }
  };
};