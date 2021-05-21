import { AxiosInstance } from "axios";
import { Analytics } from "./types/analytics";
declare const _default: (axios: AxiosInstance) => {
    bing: (locationId: string, params?: Analytics | undefined) => Promise<unknown>;
    google: (locationId: string, params?: Analytics | undefined) => Promise<unknown>;
    facebook: (locationId: string, params?: Analytics | undefined) => Promise<unknown>;
};
export default _default;
