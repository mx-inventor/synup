import{AxiosInstance} from "axios";
import{User} from "./types/User";

const endpoint = "roles";

export default (axios: AxiosInstance) => {
    return{
        getAllUsersRoles: (params: User) =>{
            return axios.get(endpoint, {params});
        }
    }
}