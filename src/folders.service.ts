import { AxiosInstance } from "axios";
import { AddLocationsPropierties } from "./types/folders";

const endpoint = 'locations';

export default (axios: AxiosInstance) => {
  return {
    addLocations(params:AddLocationsPropierties){
        return axios.post(`${endpoint}/folders`, params);
    }
  };
};