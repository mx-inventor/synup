import { AxiosInstance } from "axios";
import { GetAllLocationsParams, Location, Photo} from "./types/location";

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
    addPhotos: (locationId: string, photos: Array <Photo>) => {
      return axios.post(`${endpoint}/photos`, { input: {locationId, photos}});
    },
    deletePhotos: (locationId: string, photoIds: Array<string>) => {
      return axios.post(`${endpoint}/photos/remove`, { input:{locationId,photoIds}});
    },
    updateLocation: (id: String, locationData: Location) => {
      return axios.post(`${endpoint}/update`, {input:{id, locationData}});
    },
    starPhotos: (locationId: string, photoIds: Array<string>, starred:boolean) => {
      return axios.post(`${endpoint}/photos/star`, {
        input:{
          locationId,
          photoIds,
          starred
        }
      });
    },
    archiveLocation: (ids: Array<string>) => {
      return axios.post(endpoint + "/archive", {input:{locationIds: ids}});
    },
    activateLocation: (ids: Array<string>) => {
      return axios.post(endpoint + "/activate", {input:{ids}} );
    },
    subscriptions: () => {
      return axios.get('subscriptions');
    },
  };
};
