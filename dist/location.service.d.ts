import { AxiosInstance } from "axios";
import { GetAllLocationsParams, Location, Photo } from "./types/location";
declare const _default: (axios: AxiosInstance) => {
    create: (location: Location) => Promise<import("axios").AxiosResponse<any>>;
    listLocations: (params?: GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getAll: (params?: GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getByIds: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
    addPhotos: (locationId: string, photos: Array<Photo>) => Promise<import("axios").AxiosResponse<any>>;
    deletePhotos: (locationId: string, photoIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    updateLocation: (id: String, locationData: Location) => Promise<import("axios").AxiosResponse<any>>;
    starPhotos: (locationId: string, photoIds: Array<string>, starred: boolean) => Promise<import("axios").AxiosResponse<any>>;
    archiveLocation: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    activateLocation: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    subscriptions: () => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
