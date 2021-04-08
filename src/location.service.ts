import { AxiosInstance } from "axios";
import { CreateLocationParams, GetAllLocationsParams } from "./types/location";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    create: (params: CreateLocationParams) => {
      return axios.post(endpoint, params);
    },
    getAllLocations: (params: GetAllLocationsParams) => {
      return axios.get(endpoint, { params });
    },
  };
};
