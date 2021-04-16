import { AxiosInstance } from "axios";
import { Listings } from "./types/listings";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    getPremium:(locationId:Listings)=>{
        return axios.get(`${endpoint}/${locationId}/listings/premium`)
    },
    getAdittional:(locationId:Listings)=>{
        return axios.get(`${endpoint}/${locationId}/listings/adittional`)
    }
  };
};