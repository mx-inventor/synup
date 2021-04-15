import { AxiosInstance } from "axios";
import { AddLocationsPropierties, renameParams } from "./types/folders";
declare const _default: (axios: AxiosInstance) => {
    addLocations: (params: AddLocationsPropierties) => Promise<import("axios").AxiosResponse<any>>;
    rename: (params: renameParams) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
