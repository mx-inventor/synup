import { AxiosInstance } from "axios";
import { User } from "./types/User";
declare const _default: (axios: AxiosInstance) => {
    getAllRoles: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    createWithRole: (user: User) => Promise<import("axios").AxiosResponse<any>>;
    addLocations: (userId: string, locationIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    addFolders: (userId: string, folderIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    getAll: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    listResources: (userId: User) => Promise<import("axios").AxiosResponse<any>>;
    listByIds: (userIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
    updateUser: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    removeLocations: (userId: string, locationIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    removeFolders: (userId: string, folderIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
