import { AxiosInstance } from "axios";
import { CreateLocationParams, GetAllLocationsParams } from "./types/location";
declare const _default: (axios: AxiosInstance) => {
    create: (params: CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
    getAll: (params?: GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getByIds: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
