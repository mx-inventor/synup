import{AxiosInstance} from "axios";
import{CreateUserWithRole, User, FolderUser} from "./types/User";

const endpointRoles = "roles";
const endpointUsers = "users";

export default (axios: AxiosInstance) => {
    return{
        getAllRoles: (params: User) =>{
            return axios.get(endpointRoles, {params});
        },
        createWithRole: (params: CreateUserWithRole) => {
            return axios.post(endpointUsers, params);
        },
        addLocations: (userId: string, locationIds: Array<string>) => {
            return axios.post(endpointUsers + "/locations/add", { 
                input: {
                    userId,
                    locationIds
                }
            });
        },
        addFolder: (params: FolderUser) => {
            return axios.post(endpointUsers + "/folders/add", params);
        },
        getAll: (params: User) =>{
            return axios.get(endpointUsers, {params});
        },
        listResources: (userId: User) => {
            return axios.get(endpointUsers + "/" + userId + "/resources");
        },
        listByIds: (userIds?: Array<string> ) => {
            return axios.get("users-by-ids/",{
                params: {userIds:userIds}
            })
        },
        updateUser: (params: User) => {
            return axios.post(endpointUsers + "/update", params);
        },
        removeLocations: (userId: string, locationIds: Array<string>) => {
            return axios.post(endpointUsers + "/locations/remove", {
                input: {
                    userId,
                    locationIds
                }
            });
        },
        removeFolder: (params: FolderUser ) => {
            return axios.post(endpointUsers + "/folders/remove", params)
        }
    }
}