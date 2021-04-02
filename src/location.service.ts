import { AxiosInstance } from "axios";
import { Location } from "./types/location";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    create: (data: Location) => {
      return axios.post(endpoint, data);
    },
  };
};
