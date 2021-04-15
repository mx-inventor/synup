import { AxiosInstance } from "axios";
import { CreateUserWithRole, User, AddLocationUser } from "./types/User";
declare const _default: (axios: AxiosInstance) => {
    getAllUsersRoles: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    createUserWithRole: (params: CreateUserWithRole) => Promise<import("axios").AxiosResponse<any>>;
    addLocationUser: (params: AddLocationUser) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
