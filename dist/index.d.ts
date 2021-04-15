import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAll: (params?: import("./types/location").GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
        getByIds: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
