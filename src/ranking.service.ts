import{AxiosInstance} from "axios";
import {Keywords} from "./types/ranking";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
    return{
        addKeywordsLocation(params: Keywords){
            return axios.post(endpoint + "/keywords", params);
        }
    }
}