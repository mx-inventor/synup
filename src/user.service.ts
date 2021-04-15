import{AxiosInstance} from "axios";
import{CreateUserWithRole, User, AddLocationUser} from "./types/User";

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
        addLocationUser: (params: AddLocationUser) => {
            return axios.post(endpointUsers + "/location/add", params);
        },


    
    }
}