import { AxiosInstance } from "axios";
import { listings } from "./types/listings";
declare const _default: (axios: AxiosInstance) => {
    getPremium: (params: listings) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
