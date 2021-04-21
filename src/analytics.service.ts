import{AxiosInstance} from "axios"
import { Analytics } from "./types/analytics";

const endpoint = "locations"

export default (axios: AxiosInstance) => {
    return {
        bing:(locationId: string, params?: Analytics)=>{
            return axios.get(`${endpoint}/${locationId}/bing-analytics`, { params });
        },
        google:(locationId: string, params?: Analytics)=>{
            return axios.get(`${endpoint}/${locationId}/google-analytics`, { params });
        },
        facebook:(locationId: string, params?: Analytics)=>{
            return axios.get(`${endpoint}/${locationId}/facebook-analytics`, { params });
        },
    };
  };