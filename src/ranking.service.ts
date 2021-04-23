import{AxiosInstance} from "axios";
import {KeywordsPermormance} from "./types/ranking";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
    return{
        addKeywords: (locationId: string, inputKeywords: Array<string>) => {
            return axios.post(endpoint + "/keywords", {
                input: {
                    locationId,
                    inputKeywords
                }
            });
        },
        listKeywords: (locationId: string) => {
            return axios.get(endpoint + "/" + locationId + "/keywords");
        },
        getKeywordsPerformance: (locationId: string, params: KeywordsPermormance) => {
            return axios.get(endpoint + "/" + {locationId} + "/keywords-performance", {params}); 
        }, 
        archiveKeyword: (id: string) => {
            return axios.post(endpoint + "/keywords/archive", id);
        }
    }
}