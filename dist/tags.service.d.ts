import { AxiosInstance } from "axios";
declare const _default: (axios: AxiosInstance) => {
    addLocation: (locationId: string, tag: string) => Promise<unknown>;
    removeLocation: (locationId: string, tag: string) => Promise<unknown>;
};
export default _default;
