import{AxiosInstance} from "axios";
import {Keywords, InputArchive} from "./types/ranking";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
    return{
        addKeywordsLocation: (params: Keywords) => {
            return axios.post(endpoint + "/keywords", params);
        },
        listKeywords: (locationId: Keywords) => {
            return axios.get(endpoint + "/" + locationId + "/keywords");
        },
        getKeywordsPerformance: (locationId: Keywords) => {
            return axios.get(endpoint + "/" + locationId + "/keywords-performance"); 
        }, 
        archiveKeyword: (params: InputArchive ) => {
            return axios.post(endpoint + "/keywords/archive", params);
        }
    }
}