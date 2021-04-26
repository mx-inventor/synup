import { AxiosInstance } from "axios";
import { GetAllLocationsParams, Location, Photos} from "./types/location";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    create: (location:Location) => {
      return axios.post(endpoint, location);
    },
    listLocations: (params?: GetAllLocationsParams) => {
      return axios.get(endpoint, { params })
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
    addPhoto: (locationId: string, photos: Array <Photos>) => {
      return axios.post(`${endpoint}/photos`, { input: {locationId, photos}});
    },
    deletePhoto: (locationId: string, photoIds: Array<string>) => {
      return axios.post(`${endpoint}/photos/remove`, { input:{locationId,photoIds}});
    },
    updateLocation: (id: String, phone: string) => {
      return axios.post(`${endpoint}/update`, {input:{id, phone}});
    },
    startPhoto: (locationId: string, mediaIds: Array<string>, starred:boolean) => {
      return axios.post(`${endpoint}/photos/star`, {
        input:{
          locationId,
          mediaIds,
          starred
        }
      });
    },
    archiveLocation: (ids: Array<string>) => {
      return axios.post(endpoint + "/archive", {input:{locationIds: ids}});
    },
    activateLocation: (Ids: Array<string>) => {
      return axios.post(endpoint + "/activate", {input:{Ids}} );
    },
    subscriptions: () => {
      return axios.get('subscriptions');
    },
  };
};
