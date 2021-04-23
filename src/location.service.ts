import { AxiosInstance } from "axios";
import { CreateLocationParams, GetAllLocationsParams, Location } from "./types/location";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    create: (location:Location) => {
      return axios.post(endpoint, location);
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
    updateLocation: (locationId: String, location: Location) => {
      return axios.post(`${endpoint}/update`, {input:{locationId, location}});
    },
    startPhoto: (locationId: string, mediaIds: Array<string>, starred:boolean) => {
      return axios.post(`${endpoint}/photos/star`, {input:{locationId,mediaIds,starred}});
    },
    archiveLocation: (ids: Array<string>) => {
      return axios.post(endpoint + "/archive", {input:{locationIds: ids}});
    },
    activateLocation: (Ids: Array<string>) => {
      return axios.post(endpoint + "/activate", {input:{Ids}} );
    },
    subscriptions: (params: CreateLocationParams) => {
      return axios.get(endpoint,{params});
    },
  };
};
