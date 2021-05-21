import { AxiosInstance } from "axios";
import { Listings } from "./types/listings";
declare const _default: (axios: AxiosInstance) => {
    getPremium: (locationId: Listings) => Promise<unknown>;
    getAdittional: (locationId: Listings) => Promise<unknown>;
};
export default _default;
