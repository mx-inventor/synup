import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (data: import("./types/location").Location) => Promise<import("axios").AxiosResponse<any>>;
        getAllLocations: (params: import("./types/location").GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
