import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAllLocations: (params: import("./types/location").GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    user: {
        getAllUsersRoles: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        createUserWithRole: (params: import("./types/User").createUserWithRole) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
