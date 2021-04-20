import{AxiosInstance} from "axios";
import {Keywords, KeywordsPermormance, InputArchive} from "./types/ranking";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
    return{
        addKeywordsLocation: (params: Keywords) => {
            return axios.post(endpoint + "/keywords", params);
        },
        listKeywords: (locationId: string) => {
            return axios.get(endpoint + "/" + locationId + "/keywords");
        },
        getKeywordsPerformance: (locationId: string, params: KeywordsPermormance) => {
            return axios.get(endpoint + "/" + {locationId} + "/keywords-performance", {params}); 
        }, 
        archiveKeyword: (params: InputArchive ) => {
            return axios.post(endpoint + "/keywords/archive", params);
        }
    }
}