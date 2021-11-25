import { AxiosInstance } from 'axios';
import { KeywordsPermormance } from './types/ranking';
declare const _default: (axios: AxiosInstance) => {
    addKeywords: (locationId: string, inputKeywords: Array<string>) => Promise<unknown>;
    listKeywords: (locationId: string) => Promise<unknown>;
    getKeywordsPerformance: (locationId: string, params: KeywordsPermormance) => Promise<unknown>;
    archiveKeyword: (id: string) => Promise<unknown>;
};
export default _default;
