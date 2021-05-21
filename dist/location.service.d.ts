import { AxiosInstance } from "axios";
import { GetAllLocationsParams, Location, Photo } from "./types/location";
declare const _default: (axios: AxiosInstance) => {
    create: (location: Location) => Promise<unknown>;
    list: (params?: GetAllLocationsParams | undefined) => Promise<unknown>;
    getByIds: (ids: Array<string>) => Promise<unknown>;
    search: (query: string) => Promise<unknown>;
    addPhotos: (locationId: string, photos: Array<Photo>) => Promise<unknown>;
    deletePhotos: (locationId: string, photoIds: Array<string>) => Promise<unknown>;
    updateLocation: (id: String, locationData: Location) => Promise<unknown>;
    starPhotos: (locationId: string, photoIds: Array<string>, starred: boolean) => Promise<unknown>;
    archiveLocation: (ids: Array<string>) => Promise<unknown>;
    activateLocation: (ids: Array<string>) => Promise<unknown>;
    subscriptions: () => Promise<unknown>;
};
export default _default;
