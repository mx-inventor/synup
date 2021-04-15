import { AxiosInstance } from "axios";
import { AddLocationsPropierties,renameParams } from "./types/folders";

const endpoint = 'locations/folders';

export default (axios: AxiosInstance) => {
  return {
    addLocations:(params:AddLocationsPropierties)=>{
        return axios.post(`${endpoint}`, params);
    },

    rename:(params:renameParams)=>{
      return axios.post(`${endpoint}/rename`,params);
    }
  };
};