import { AxiosInstance } from "axios";
import { Keywords } from "./types/ranking";
declare const _default: (axios: AxiosInstance) => {
    addKeywordsLocation(params: Keywords): Promise<import("axios").AxiosResponse<any>>;
    listKeywords(locationId: Keywords): Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
