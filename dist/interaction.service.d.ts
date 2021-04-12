import { AxiosInstance } from "axios";
import { InteractionParams } from "./types/interactions";
declare const _default: (axios: AxiosInstance) => {
    getInteractions: (id: any, params: InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
