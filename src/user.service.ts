import{AxiosInstance} from "axios";
import{CreateUserWithRole, User, LocationUser, AddFolderUser} from "./types/User";

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
        addLocationUser: (params: LocationUser) => {
            return axios.post(endpointUsers + "/locations/add", params);
        },
        addFoldersUser: (params: AddFolderUser) => {
            return axios.post(endpointUsers + "/folders/add", params);
        },
        getAllUsers: (params: User) =>{
            return axios.get(endpointUsers, {params});
        },
        listUserResources: (userId: User) => {
            return axios.get(endpointUsers + "/" + userId + "/resources");
        },
        listUsersDetailsById: (userIds?: Array<string> ) => {
            return axios.get("users-by-ids/",{
                params: {userIds:userIds}
            })
        },
        updateUser: (params: User) => {
            return axios.post(endpointUsers + "/update", params);
        },
        removeLocationUser: (params: LocationUser) => {
            return axios.post(endpointUsers + "/locations/remove", params);
        }

    }
}