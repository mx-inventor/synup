import { AxiosInstance } from "axios";
import { addInteractionSource, InteractionParams, RespondInteraction } from "./types/interactions";

const endpoint = 'locations';

export default (axios: AxiosInstance) => {
  return {
    getByLocationId:(locationId:string, params?: InteractionParams) => {
      return axios.get(`${endpoint}/${locationId}/reviews`, {params});
    },
    getById:(intractionByIds?:Array<string>)=>{
      return axios.get(`${endpoint}/reviewDetails`,{
        params:{interactionIds:intractionByIds}});
    },
    respondToAnInteraction:(params:RespondInteraction)=>{
      return axios.post(`${endpoint}/reviews/respond`,params);
    },
    getSourcesByLocation:(locationId:string)=>{
      return axios.get(`${endpoint}/${locationId}/reviews/settings`);
    },
    addInteractionSource:(params:addInteractionSource)=>{
      return axios.post(`${endpoint}/reviews/settings/edit`,params);
    },
    editInteractionSource:(params:InteractionParams)=>{
      return axios.post(`${endpoint}/reviews/settings/edit`,params);
    }
  };
};