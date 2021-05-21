import { AxiosInstance } from "axios";
declare const _default: (axios: AxiosInstance) => {
    addLocations: (name: string, locationIds: Array<string>) => Promise<unknown>;
    rename: (name: string, id: Array<string>) => Promise<unknown>;
    removeLocation: (locationIds: Array<string>) => Promise<unknown>;
    deleteFolder: (name: string) => Promise<unknown>;
};
export default _default;
