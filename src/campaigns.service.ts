import{AxiosInstance} from "axios"
import { Customer,AddCustomer } from "./types/campaigns";

const endpoint = "locations/review-campaigns"

export default (axios: AxiosInstance) => {
    return {
      create:(params:Customer)=>{
        return axios.post(`${endpoint}`,params)
      },
      addCustomers:(params:AddCustomer)=>{
          return axios.post(`${endpoint}/customers`,params)
      }
    };
  };