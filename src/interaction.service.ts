import { AxiosInstance } from "axios";
import { InteractionParams, Site } from "./types/interactions";

const endpoint = 'locations';

export default (axios: AxiosInstance) => {
  return {
    getByLocationId:(locationId:string, params?: InteractionParams) => {
      return axios.get(`${endpoint}/${locationId}/reviews`, {params});
    },
    getById:(intractionByIds?:Array<string>)=>{
      return axios.get(`${endpoint}/reviewDetails`,{
        params:{interactionIds:intractionByIds}
      });
    },
    respondToAnInteraction:(interactionId:string, responseContent:string)=>{
      return axios.post(`${endpoint}/reviews/respond`,{
        interactionId,
        responseContent
      });
    },
    getSourcesByLocation:(locationId:string)=>{
      return axios.get(`${endpoint}/${locationId}/reviews/settings`);
    },
    addInteractionSource:(locationId:string, siteUrls:Site)=>{
      return axios.post(`${endpoint}/reviews/settings/edit`,{
        locationId,
        siteUrls
      });
    },
    editInteractionSource:(locationId:string, siteUrls:Site)=>{
      return axios.post(`${endpoint}/reviews/settings/edit`,{
        locationId,
        siteUrls
      });
    }
  };
};