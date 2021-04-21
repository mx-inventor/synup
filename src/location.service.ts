import { AxiosInstance } from "axios";
import { CreateLocationParams, deletePhoto, GetAllLocationsParams } from "./types/location";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    create: (params: CreateLocationParams) => {
      return axios.post(endpoint, params);
    },
    getAll: (params?: GetAllLocationsParams) => {
      return axios.get(endpoint, { params });
    },
    getByIds: (ids: Array<string>) => {
      return axios.get("locations-by-ids", { params: { ids } });
    },
    search: (query:string) => {
      return axios.get(endpoint + "/search", { params: {query}});
    },
    addPhoto: (locationId: Array<string>) => {
      return axios.post("locationId", { params: {locationId}});
    },
    deletePhoto: (params:deletePhoto
      ) => {
      return axios.post(`${endpoint}/photoIds/remove`, params);
    }
    /*updateLocation: () => {
      return axios.post(endpoint + "/updateLocation", {params: {update}});
    },*/
  };
};
