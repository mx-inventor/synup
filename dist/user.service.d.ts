import { AxiosInstance } from "axios";
import { CreateUserWithRole, User } from "./types/User";
declare const _default: (axios: AxiosInstance) => {
    getAllUsersRoles: (params: User) => Promise<import("axios").AxiosResponse<any>>;
    createUserWithRole: (params: CreateUserWithRole) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
