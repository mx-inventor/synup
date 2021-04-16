import { AxiosInstance } from "axios";
import { LocationTag } from "./types/tags";
declare const _default: (axios: AxiosInstance) => {
    addLocations: (params: LocationTag) => Promise<import("axios").AxiosResponse<any>>;
    removeLocations: (params: LocationTag) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
