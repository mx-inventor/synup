import{AxiosInstance} from "axios"
import { Customer,listParams } from "./types/campaigns";

const endpoint = "locations/review-campaigns"

export default (axios: AxiosInstance) => {
    return {
      create:(locationId:string, name:string, locationCustomers:Array<Customer>)=>{
        return axios.post(`${endpoint}`, {
          input: {
            locationId,
            name,
            locationCustomers
          }
        });
      },
      addCustomers:(reviewCampaignId:string, locationCustomers:Array<Customer>)=>{
          return axios.post(`${endpoint}/customers`,{
            input:{
              reviewCampaignId,
              locationCustomers,
            }
          })
      },
      list:(locationId:string,params?:listParams)=>{
          return axios.get(`locations/${locationId}/review-campaigns`,{params})
      }
    };
  };