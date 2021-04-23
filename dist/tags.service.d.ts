import { AxiosInstance } from "axios";
declare const _default: (axios: AxiosInstance) => {
    addLocation: (locationId: string, tag: string) => Promise<import("axios").AxiosResponse<any>>;
    removeLocation: (locationId: string, tag: string) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
