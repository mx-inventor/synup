import{AxiosInstance} from "axios";
import{createUserWithRole, User} from "./types/User";

const endpointRoles = "roles";
const endpointUsers = "users";

export default (axios: AxiosInstance) => {
    return{
        getAllUsersRoles: (params: User) =>{
            return axios.get(endpointRoles, {params});
        },
        createUserWithRole: (params: createUserWithRole) => {
            return axios.post(endpointUsers, {params});
        }

    }
}