import { AxiosInstance } from "axios";
import { KeywordsPermormance } from "./types/ranking";
declare const _default: (axios: AxiosInstance) => {
    addKeywords: (locationId: string, keywords: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
    listKeywords: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
    getKeywordsPerformance: (locationId: string, params: KeywordsPermormance) => Promise<import("axios").AxiosResponse<any>>;
    archiveKeyword: (id: string) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
