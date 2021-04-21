import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAll: (params?: import("./types/location").GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
        getByIds: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
        addPhoto: (locationId: string[]) => Promise<import("axios").AxiosResponse<any>>;
        deletePhoto: (params: import("./types/location").deletePhoto) => Promise<import("axios").AxiosResponse<any>>;
        updateLocation: (params: import("./types/location").updateLocation) => Promise<import("axios").AxiosResponse<any>>;
        startPhoto: (params: import("./types/location").startPhoto) => Promise<import("axios").AxiosResponse<any>>;
        archiveLocation: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        activateLocation: (locationId: string[]) => Promise<import("axios").AxiosResponse<any>>;
        subscriptions: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
