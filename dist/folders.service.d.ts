import { AxiosInstance } from "axios";
import { AddLocationsPropierties, RenameParams, RemoveLocations, DeleteFolder } from "./types/folders";
declare const _default: (axios: AxiosInstance) => {
    addLocations: (params: AddLocationsPropierties) => Promise<import("axios").AxiosResponse<any>>;
    rename: (params: RenameParams) => Promise<import("axios").AxiosResponse<any>>;
    removeLocation: (params: RemoveLocations) => Promise<import("axios").AxiosResponse<any>>;
    deleteFolder: (params: DeleteFolder) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;