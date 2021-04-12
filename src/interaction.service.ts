import { AxiosInstance } from "axios";
import { Interactions, InteractionParams } from "./types/interactions";

const endpoint = 'locations/';
//"TG9jYXRpb246MTI2NzE5" id del ejemplo del api
//"TWVkaWFGaWxlOjEzMDMzMg==" id de locations

export default (axios: AxiosInstance) => {
  return {
    getInteractions: (id:any, params: InteractionParams) => {
      return axios.get(endpoint+id+"/reviews", {params});
    },
  };
};