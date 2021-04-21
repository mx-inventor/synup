import{AxiosInstance} from "axios"
import { Customer,AddCustomer,listParams } from "./types/campaigns";

const endpoint = "locations/review-campaigns"

export default (axios: AxiosInstance) => {
    return {
      create:(params:Customer)=>{
        return axios.post(`${endpoint}`,params)
      },
      addCustomers:(params:AddCustomer)=>{
          return axios.post(`${endpoint}/customers`,params)
      },
      list:(locationId:string,params?:listParams)=>{
          return axios.get(`locations/${locationId}/review-campaigns`,{params})
      }
    };
  };