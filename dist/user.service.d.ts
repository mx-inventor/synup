import { AxiosInstance } from "axios";
import { CreateUserWithRole, User, LocationUser, AddFolderUser } from "./types/User";
declare const _default: (axios: AxiosInstance) => {
    getAllUsersRoles: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    createUserWithRole: (params: CreateUserWithRole) => Promise<import("axios").AxiosResponse<any>>;
    addLocationUser: (params: LocationUser) => Promise<import("axios").AxiosResponse<any>>;
    addFoldersUser: (params: AddFolderUser) => Promise<import("axios").AxiosResponse<any>>;
    getAllUsers: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    listUserResources: (userId: User) => Promise<import("axios").AxiosResponse<any>>;
    listUsersDetailsById: (userIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
    updateUser: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    removeLocationUser: (params: LocationUser) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
