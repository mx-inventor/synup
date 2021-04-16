import { AxiosInstance } from "axios";
import { AddLocations } from "./types/folders";

const endpoint = "locations/tags";

export default (axios: AxiosInstance) => {
  return {
    addLocations:(params:AddLocations)=>{
        return axios.post(`${endpoint}`,params);
    }
  }
}