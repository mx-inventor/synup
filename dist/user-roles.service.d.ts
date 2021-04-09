import { AxiosInstance } from "axios";
import { User } from "./types/User";
declare const _default: (axios: AxiosInstance) => {
    getAllUsersRoles: (params: User) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
