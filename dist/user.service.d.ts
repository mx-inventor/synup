import { AxiosInstance } from "axios";
import { User } from "./types/User";
declare const _default: (axios: AxiosInstance) => {
    getAllRoles: (params: User) => Promise<unknown>;
    createWithRole: (user: User) => Promise<unknown>;
    addLocations: (userId: string, locationIds: Array<string>) => Promise<unknown>;
    addFolders: (userId: string, folderIds: Array<string>) => Promise<unknown>;
    getAll: (params: User) => Promise<unknown>;
    listResources: (userId: User) => Promise<unknown>;
    listByIds: (userIds?: string[] | undefined) => Promise<unknown>;
    update: (userId: string, user: User) => Promise<unknown>;
    removeLocations: (userId: string, locationIds: Array<string>) => Promise<unknown>;
    removeFolders: (userId: string, folderIds: Array<string>) => Promise<unknown>;
};
export default _default;
