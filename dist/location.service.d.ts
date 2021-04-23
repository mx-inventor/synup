import { AxiosInstance } from "axios";
import { CreateLocationParams, GetAllLocationsParams, Location } from "./types/location";
declare const _default: (axios: AxiosInstance) => {
    create: (location: Location) => Promise<import("axios").AxiosResponse<any>>;
    getAll: (params?: GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getByIds: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
    addPhoto: (locationId: string, photos: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    deletePhoto: (locationId: string, photoIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    updateLocation: (locationId: String, location: Location) => Promise<import("axios").AxiosResponse<any>>;
    startPhoto: (locationId: string, mediaIds: Array<string>, starred: boolean) => Promise<import("axios").AxiosResponse<any>>;
    archiveLocation: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    activateLocation: (Ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    subscriptions: (params: CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
