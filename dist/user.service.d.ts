import { AxiosInstance } from "axios";
import { CreateUserWithRole, User, LocationUser, FolderUser } from "./types/User";
declare const _default: (axios: AxiosInstance) => {
    getAllRoles: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    createWithRole: (params: CreateUserWithRole) => Promise<import("axios").AxiosResponse<any>>;
    addLocation: (params: LocationUser) => Promise<import("axios").AxiosResponse<any>>;
    addFolder: (params: FolderUser) => Promise<import("axios").AxiosResponse<any>>;
    getAll: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    listResources: (userId: User) => Promise<import("axios").AxiosResponse<any>>;
    listByIds: (userIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
    updateUser: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    removeLocation: (params: LocationUser) => Promise<import("axios").AxiosResponse<any>>;
    removeFolder: (params: FolderUser) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
