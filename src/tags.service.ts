import { AxiosInstance } from "axios";

const endpoint = "locations/tags";

export default (axios: AxiosInstance) => {
  return {
    addLocation:(locationId: string, tag: string)=>{
        return axios.post(`${endpoint}`, {
          input: {
            locationId,
            tag
          }
        });
    },
    removeLocation:(locationId: string, tag: string)=>{
        return axios.post(`${endpoint}/remove`, {
          input: {
            locationId,
            tag
          }
        });
    }
  }
}