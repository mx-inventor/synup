import { AxiosInstance } from "axios";
import { GetAllLocationsParams, Location } from "./types/location";
declare const _default: (axios: AxiosInstance) => {
    create: (data: Location) => Promise<import("axios").AxiosResponse<any>>;
    getAllLocations: (params: GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
