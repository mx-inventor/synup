import { AxiosInstance } from "axios";
import { LocationTag } from "./types/tags";

const endpoint = "locations/tags";

export default (axios: AxiosInstance) => {
  return {
    addLocations:(params:LocationTag)=>{
        return axios.post(`${endpoint}`,params);
    },
    removeLocations:(params:LocationTag)=>{
        return axios.post(`${endpoint}/remove`,params);
    }
  }
}