import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAllLocations: (params: import("./types/location").GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    Interactions: {
        getInteractions: (id: any, params: import("./types/interactions").InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
