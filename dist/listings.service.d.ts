import { AxiosInstance } from "axios";
import { Listings } from "./types/listings";
declare const _default: (axios: AxiosInstance) => {
    getPremium: (locationId: Listings) => Promise<import("axios").AxiosResponse<any>>;
    getAdittional: (locationId: Listings) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
