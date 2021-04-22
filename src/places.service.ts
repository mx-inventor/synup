import{AxiosInstance} from "axios";

const endpoint = "countries";

export default (axios: AxiosInstance) => {
    return{
        getPlaces: (params: any) => {
            return axios.get(endpoint, params);
        }
    }
}