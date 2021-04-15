import { AxiosInstance } from "axios";
import { AddLocationsPropierties,RenameParams,RemoveLocations,DeleteFolder } from "./types/folders";

const endpoint = 'locations/folders';

export default (axios: AxiosInstance) => {
  return {
    addLocations:(params:AddLocationsPropierties)=>{
        return axios.post(`${endpoint}`, params);
    },

    rename:(params:RenameParams)=>{
      return axios.post(`${endpoint}/rename`,params);
    },

    removeLocation:(params:RemoveLocations)=>{
      return axios.post(`${endpoint}/remove`,params);
    },

    deleteFolder:(params:DeleteFolder)=>{
      return axios.post(`folders/remove`,params);
    }
  };
};