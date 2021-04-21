import { AxiosInstance } from "axios";
import { Analytics } from "./types/analytics";
declare const _default: (axios: AxiosInstance) => {
    bing: (locationId: string, params?: Analytics | undefined) => Promise<import("axios").AxiosResponse<any>>;
    google: (locationId: string, params?: Analytics | undefined) => Promise<import("axios").AxiosResponse<any>>;
    facebook: (locationId: string, params?: Analytics | undefined) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
