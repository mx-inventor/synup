import { AxiosInstance } from "axios";
import { Interactions, InteractionParams, RespondInteraction } from "./types/interactions";

const endpoint = 'locations';
//"TG9jYXRpb246MTI2NzE5" id del ejemplo del api
//"TWVkaWFGaWxlOjEzMDMzMg==" id de locations

export default (axios: AxiosInstance) => {
  return {
    getInteractions:(locationId:string, params?: InteractionParams) => {
      return axios.get(`${endpoint}/${locationId}/reviews`, {params});
    },
    getInteractionById:(intractionByIds?:Array<string>)=>{
      return axios.get(`${endpoint}/reviewDetails${intractionByIds}`);
    },
    respondToAnInteraction:(params:RespondInteraction)=>{
      return axios.post(`${endpoint}/reviews/respond`,params);
    },
    getListOfInteractionSources:(locationId:string)=>{
      return axios.get(`${endpoint}/${locationId}/reviews/settings`);
    },
    addInteractionSource:(params:InteractionParams)=>{
      return axios.post(`${endpoint}/reviews/settings/edit`,params);
    },
    editInteractionSource:(params:InteractionParams)=>{
      return axios.post(`${endpoint}/reviews/settings/edit`,params);
    }
  };
};