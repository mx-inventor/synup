import { AxiosInstance } from "axios";
import { Location } from "./types/location";
declare const _default: (axios: AxiosInstance) => {
    create: (data: Location) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
