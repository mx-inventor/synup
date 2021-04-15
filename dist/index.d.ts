import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAllLocations: (params: import("./types/location").GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    User: {
        getAllUsersRoles: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        createUserWithRole: (params: import("./types/User").CreateUserWithRole) => Promise<import("axios").AxiosResponse<any>>;
        addLocationUser: (params: import("./types/User").LocationUser) => Promise<import("axios").AxiosResponse<any>>;
        addFoldersUser: (params: import("./types/User").AddFolderUser) => Promise<import("axios").AxiosResponse<any>>;
        getAllUsers: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        listUserResources: (userId: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        listUsersDetailsById: (userIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
        updateUser: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        removeLocationUser: (params: import("./types/User").LocationUser) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
