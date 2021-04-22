import { AxiosInstance } from "axios";
import { CreateLocationParams, DeletePhoto, GetAllLocationsParams, StartPhoto, UpdateLocation } from "./types/location";

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
    addPhoto: (locationId: string, photos: Array <string>) => {
      return axios.post(`${endpoint}/photos`, { input: {locationId, photos}});
    },
    deletePhoto: (locationId: string, photoIds: Array<string>) => {
      return axios.post(`${endpoint}/photos/remove`, { input:{locationId,photoIds}});
    },
    updateLocation: (params:UpdateLocation) => {
      return axios.post(`${endpoint}/update`, params);
    },
    startPhoto: (input:StartPhoto) => {
      return axios.post(`${endpoint}/photos/star`, input);
    },
    archiveLocation: (ids: Array<string>) => {
      return axios.post(endpoint + "/archive", {input:{locationIds: ids}});
    },
    activateLocation: (locationIds: Array<string>) => {
      return axios.post(endpoint + "/activate", {input:{locationIds}} );
    },
    subscriptions: (params: CreateLocationParams) => {
      return axios.get(endpoint,{params});
    },
  };
};
