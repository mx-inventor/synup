import{AxiosInstance} from "axios";
import{User} from "./types/User";

const endpointRoles = "roles";
const endpointUsers = "users";

export default (axios: AxiosInstance) => {
    return{
        getAllRoles: (params: User) =>{
            return axios.get(endpointRoles, {params});
        },
        createWithRole: (user: User) => {
            return axios.post(endpointUsers, user);
        },
        addLocations: (userId: string, locationIds: Array<string>) => {
            return axios.post(endpointUsers + "/locations/add", { 
                input: {
                    userId,
                    locationIds
                }
            });
        },
        addFolders: (userId: string, folderIds: Array<string>) => {
            return axios.post(endpointUsers + "/folders/add",{
                input: {
                    userId,
                    folderIds
                }
            });
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
        removeFolders: (userId: string, folderIds: Array<string> ) => {
            return axios.post(endpointUsers + "/folders/remove", {
                input: {
                    userId,
                    folderIds
                }
            })
        }
    }
}