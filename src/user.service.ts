import{AxiosInstance} from "axios";
import{CreateUserWithRole, User} from "./types/User";

const endpointRoles = "roles";
const endpointUsers = "users";

export default (axios: AxiosInstance) => {
    return{
        getAllUsersRoles: (params: User) =>{
            return axios.get(endpointRoles, {params});
        },
        createUserWithRole: (params: CreateUserWithRole) => {
            return axios.post(endpointUsers, params);
        },
    }
}