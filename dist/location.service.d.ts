import { AxiosInstance } from "axios";
import { CreateLocationParams, GetAllLocationsParams } from "./types/location";
declare const _default: (axios: AxiosInstance) => {
    create: (params: CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
    getAllLocations: (params: GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
