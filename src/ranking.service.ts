import{AxiosInstance} from "axios";
import {Keywords, KeywordsPermormance} from "./types/ranking";

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
        }
    }
}