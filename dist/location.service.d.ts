import { AxiosInstance } from "axios";
import { GetAllLocationsParams, Location, Photos } from "./types/location";
declare const _default: (axios: AxiosInstance) => {
    create: (location: Location) => Promise<import("axios").AxiosResponse<any>>;
    listLocations: (params?: GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getAll: (params?: GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getByIds: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
    addPhoto: (locationId: string, photos: Array<Photos>) => Promise<import("axios").AxiosResponse<any>>;
    deletePhoto: (locationId: string, photoIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    updateLocation: (id: String, phone: string) => Promise<import("axios").AxiosResponse<any>>;
    starPhoto: (locationId: string, photoIds: Array<string>, starred: boolean) => Promise<import("axios").AxiosResponse<any>>;
    archiveLocation: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    activateLocation: (Ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    subscriptions: () => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
