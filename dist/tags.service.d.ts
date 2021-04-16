import { AxiosInstance } from "axios";
import { AddLocations } from "./types/folders";
declare const _default: (axios: AxiosInstance) => {
    addLocations: (params: AddLocations) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
