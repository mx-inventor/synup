import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Locations: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAll: (params?: import("./types/location").GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
        getByIds: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
        addPhoto: (locationId: string, photos: string[]) => Promise<import("axios").AxiosResponse<any>>;
        deletePhoto: (locationId: string, photoIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        updateLocation: (params: import("./types/location").updateLocation) => Promise<import("axios").AxiosResponse<any>>;
        startPhoto: (input: import("./types/location").startPhoto) => Promise<import("axios").AxiosResponse<any>>;
        archiveLocation: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        activateLocation: (locationIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        subscriptions: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
