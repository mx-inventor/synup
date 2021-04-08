import { AxiosInstance } from "axios";
import { GetAllLocationsParams, Location } from "./types/location";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    create: (data: Location) => {
      return axios.post(endpoint, data);
    },
    getAllLocations: (params: GetAllLocationsParams) => {
      return axios.get(endpoint, { params });
    },
  };
};
