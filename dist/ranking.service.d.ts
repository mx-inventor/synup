import { AxiosInstance } from "axios";
import { Keywords, KeywordsPermormance, InputArchive } from "./types/ranking";
declare const _default: (axios: AxiosInstance) => {
    addKeywordsLocation: (params: Keywords) => Promise<import("axios").AxiosResponse<any>>;
    listKeywords: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
    getKeywordsPerformance: (locationId: string, params: KeywordsPermormance) => Promise<import("axios").AxiosResponse<any>>;
    archiveKeyword: (params: InputArchive) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
