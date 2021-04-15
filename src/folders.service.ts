import { AxiosInstance } from "axios";
import { AddLocations } from "./types/folders";

const endpoint = 'locations';

export default (axios: AxiosInstance) => {
  return {
    addLocations(params:AddLocations){
        return axios.post(`${endpoint}/locations/folders`, params);
    }
  };
};