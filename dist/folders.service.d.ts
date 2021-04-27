import { AxiosInstance } from "axios";
declare const _default: (axios: AxiosInstance) => {
    addLocations: (name: string, locationIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    rename: (name: string, id: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    removeLocation: (locationIds: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    deleteFolder: (name: string) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
